require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

async function getContent() {
    const { data, error } = await supabaseAdmin
        .from('dreams')
        .select('content')
        .eq('slug', 'yuxuda-ilan-gormek')
        .single();

    if (error) {
        console.error(error);
        process.exit(1);
    }
    const tableIndex = data.content.indexOf('<table');
    if (tableIndex !== -1) {
        console.log(data.content.substring(tableIndex - 200, tableIndex + 800));
    } else {
        console.log("No table found");
        console.log(data.content.substring(0, 1000));
    }
    process.exit(0);
}

getContent();
