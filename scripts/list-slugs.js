require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

async function listSlugs() {
    const lang = process.argv[2] || 'az';
    const tableName = lang === 'tr' ? 'dreams_tr' : lang === 'en' ? 'dreams_en' : 'dreams';

    const { data, error } = await supabaseAdmin
        .from(tableName)
        .select('slug, title');

    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log(JSON.stringify(data));
    process.exit(0);
}

listSlugs();
