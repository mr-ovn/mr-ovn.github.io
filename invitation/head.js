head();

function head(){

    const meta_tag =   `<title>Приглашение</title>\n
                        <meta name="title" content="ПРИГЛАШЕНИЕ!!!">\n
                        <meta name="description" content="Приглашение на день рождения">\n
                        \n
                        <!-- Open Graph / Facebook -->\n
                        <meta property="og:type" content="website">\n
                        <meta property="og:url" content="https://mr-ovn.githab.io/invitation/100_test.html">\n
                        <meta property="og:title" content="ПРИГЛАШЕНИЕ!!!">\n
                        <meta property="og:description" content="Приглашение на день рождения">\n
                        <meta property="og:image" content="https://mr-ovn.github/invitation/img/pr.jpg" />\n
                        <meta property="og:image:secure_url" content="https://secure.mr-ovn.github/invitation/img/pr.jpg" />\n
                        <meta property="og:image:type" content="image/jpeg" />\n
                        <meta property="og:image:width" content="300" />\n
                        <meta property="og:image:height" content="200" />\n
                        <meta property="og:image:alt" content="Invitation foto" />\n
                        \n
                        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n
                        <link rel="stylesheet" href="style.css">\n
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">`;

    document.getElementById('head_id').innerHTML = meta_tag;

}

// <!-- Primary Meta Tags -->
// <title>ПРИГЛАШЕНИЕ!!!</title>
// <meta name="title" content="ПРИГЛАШЕНИЕ!!!">
// <meta name="description" content="Приглашение на день рождения">

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="ПРИГЛАШЕНИЕ!!!">
// <meta property="og:description" content="Приглашение на день рождения">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="ПРИГЛАШЕНИЕ!!!">
// <meta property="twitter:description" content="Приглашение на день рождения">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

// addMetaTag_2();

// function addMetaTag_2(){

//     let tag_meta = document.createElement("meta");
//     let att_property = document.createAttribute("property");
//     att_property.value = 'og:image:secure_url';
//     let att_content = document.createAttribute("content");
//     att_content.value = 'https://secure.example.com/ogp.jpg';


// }

