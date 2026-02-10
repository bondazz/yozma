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
    console.log(data.content);
    process.exit(0);
}

getContent();
