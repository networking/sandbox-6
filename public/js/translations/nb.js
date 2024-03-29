(function (t) {
// nb
t.add("This value should be false.", "Verdien m\u00e5 v\u00e6re usann.", "validators", "nb");
t.add("This value should be true.", "Verdien m\u00e5 v\u00e6re sann.", "validators", "nb");
t.add("This value should be of type {{ type }}.", "Verdien skal ha typen {{ type }}.", "validators", "nb");
t.add("This value should be blank.", "Verdien skal v\u00e6re blank.", "validators", "nb");
t.add("The value you selected is not a valid choice.", "Den valgte verdien er ikke gyldig.", "validators", "nb");
t.add("You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.", "Du m\u00e5 velge minst {{ limit }} valg.", "validators", "nb");
t.add("You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.", "Du kan maks velge {{ limit }} valg.", "validators", "nb");
t.add("One or more of the given values is invalid.", "En eller flere av de oppgitte verdiene er ugyldige.", "validators", "nb");
t.add("This field was not expected.", "Dette feltet var ikke forventet.", "validators", "nb");
t.add("This field is missing.", "Dette feltet mangler.", "validators", "nb");
t.add("This value is not a valid date.", "Verdien er ikke en gyldig dato.", "validators", "nb");
t.add("This value is not a valid datetime.", "Verdien er ikke en gyldig dato\/tid.", "validators", "nb");
t.add("This value is not a valid email address.", "Verdien er ikke en gyldig e-postadresse.", "validators", "nb");
t.add("The file could not be found.", "Filen kunne ikke finnes.", "validators", "nb");
t.add("The file is not readable.", "Filen er ikke lesbar.", "validators", "nb");
t.add("The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.", "Filen er for stor ({{ size }} {{ suffix }}). Tilatte maksimale st\u00f8rrelse {{ limit }} {{ suffix }}.", "validators", "nb");
t.add("The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.", "Mimetypen av filen er ugyldig ({{ type }}). Tilatte mimetyper er {{ types }}.", "validators", "nb");
t.add("This value should be {{ limit }} or less.", "Verdien m\u00e5 v\u00e6re {{ limit }} tegn lang eller mindre.", "validators", "nb");
t.add("This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.", "Verdien er for lang. Den m\u00e5 ha {{ limit }} tegn eller mindre.", "validators", "nb");
t.add("This value should be {{ limit }} or more.", "Verdien m\u00e5 v\u00e6re {{ limit }} eller mer.", "validators", "nb");
t.add("This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.", "Verdien er for kort. Den m\u00e5 ha {{ limit }} tegn eller flere.", "validators", "nb");
t.add("This value should not be blank.", "Verdien kan ikke v\u00e6re blank.", "validators", "nb");
t.add("This value should not be null.", "Verdien kan ikke v\u00e6re tom (null).", "validators", "nb");
t.add("This value should be null.", "Verdien skal v\u00e6re tom (null).", "validators", "nb");
t.add("This value is not valid.", "Verdien er ugyldig.", "validators", "nb");
t.add("This value is not a valid time.", "Verdien er ikke en gyldig tid.", "validators", "nb");
t.add("This value is not a valid URL.", "Verdien er ikke en gyldig URL.", "validators", "nb");
t.add("The two values should be equal.", "Verdiene skal v\u00e6re identiske.", "validators", "nb");
t.add("The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.", "Filen er for stor. Den maksimale st\u00f8rrelsen er {{ limit }} {{ suffix }}.", "validators", "nb");
t.add("The file is too large.", "Filen er for stor.", "validators", "nb");
t.add("The file could not be uploaded.", "Filen kunne ikke lastes opp.", "validators", "nb");
t.add("This value should be a valid number.", "Verdien skal v\u00e6re et gyldig tall.", "validators", "nb");
t.add("This file is not a valid image.", "Denne filen er ikke et gyldig bilde.", "validators", "nb");
t.add("This is not a valid IP address.", "Dette er ikke en gyldig IP adresse.", "validators", "nb");
t.add("This value is not a valid language.", "Verdien er ikke et gyldig spr\u00e5k.", "validators", "nb");
t.add("This value is not a valid locale.", "Verdien er ikke en gyldig lokalitet.", "validators", "nb");
t.add("This value is not a valid country.", "Verdien er ikke et gyldig navn p\u00e5 land.", "validators", "nb");
t.add("This value is already used.", "Verdien er allerede brukt.", "validators", "nb");
t.add("The size of the image could not be detected.", "Bildest\u00f8rrelsen kunne ikke oppdages.", "validators", "nb");
t.add("The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.", "Bildebredden er for stor ({{ width }} piksler). Tillatt maksimumsbredde er {{ max_width }} piksler.", "validators", "nb");
t.add("The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.", "Bildebredden er for liten ({{ width }} piksler). Forventet minimumsbredde er {{ min_width }} piksler.", "validators", "nb");
t.add("The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.", "Bildeh\u00f8yden er for stor ({{ height }} piksler). Tillatt maksimumsh\u00f8yde er {{ max_height }} piksler.", "validators", "nb");
t.add("The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.", "Bildeh\u00f8yden er for liten ({{ height }} piksler). Forventet minimumsh\u00f8yde er {{ min_height }} piksler.", "validators", "nb");
t.add("This value should be the user's current password.", "Verdien skal v\u00e6re brukerens sitt n\u00e5v\u00e6rende passord.", "validators", "nb");
t.add("This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.", "Verdien skal v\u00e6re n\u00f8yaktig {{ limit }} tegn.", "validators", "nb");
t.add("The file was only partially uploaded.", "Filen var kun delvis opplastet.", "validators", "nb");
t.add("No file was uploaded.", "Ingen fil var lastet opp.", "validators", "nb");
t.add("No temporary folder was configured in php.ini.", "Den midlertidige mappen (tmp) er ikke konfigurert i php.ini.", "validators", "nb");
t.add("Cannot write temporary file to disk.", "Kan ikke skrive midlertidig fil til disk.", "validators", "nb");
t.add("A PHP extension caused the upload to fail.", "En PHP-utvidelse for\u00e5rsaket en feil under opplasting.", "validators", "nb");
t.add("This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.", "Denne samlingen m\u00e5 inneholde {{ limit }} element eller flere.|Denne samlingen m\u00e5 inneholde {{ limit }} elementer eller flere.", "validators", "nb");
t.add("This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.", "Denne samlingen m\u00e5 inneholde {{ limit }} element eller f\u00e6rre.|Denne samlingen m\u00e5 inneholde {{ limit }} elementer eller f\u00e6rre.", "validators", "nb");
t.add("This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.", "Denne samlingen m\u00e5 inneholde n\u00f8yaktig {{ limit }} element.|Denne samlingen m\u00e5 inneholde n\u00f8yaktig {{ limit }} elementer.", "validators", "nb");
t.add("Invalid card number.", "Ugyldig kortnummer.", "validators", "nb");
t.add("Unsupported card type or invalid card number.", "Korttypen er ikke st\u00f8ttet eller kortnummeret er ugyldig.", "validators", "nb");
t.add("This is not a valid International Bank Account Number (IBAN).", "Dette er ikke et gyldig IBAN-nummer.", "validators", "nb");
t.add("This value is not a valid ISBN-10.", "Verdien er ikke en gyldig ISBN-10.", "validators", "nb");
t.add("This value is not a valid ISBN-13.", "Verdien er ikke en gyldig ISBN-13.", "validators", "nb");
t.add("This value is neither a valid ISBN-10 nor a valid ISBN-13.", "Verdien er hverken en gyldig ISBN-10 eller ISBN-13.", "validators", "nb");
t.add("This value is not a valid ISSN.", "Verdien er ikke en gyldig ISSN.", "validators", "nb");
t.add("This value is not a valid currency.", "Verdien er ikke gyldig valuta.", "validators", "nb");
t.add("This value should be equal to {{ compared_value }}.", "Verdien skal v\u00e6re lik {{ compared_value }}.", "validators", "nb");
t.add("This value should be greater than {{ compared_value }}.", "Verdien skal v\u00e6re st\u00f8rre enn {{ compared_value }}.", "validators", "nb");
t.add("This value should be greater than or equal to {{ compared_value }}.", "Verdien skal v\u00e6re st\u00f8rre enn eller lik {{ compared_value }}.", "validators", "nb");
t.add("This value should be identical to {{ compared_value_type }} {{ compared_value }}.", "Verdien skal v\u00e6re identisk med {{ compared_value_type }} {{ compared_value }}.", "validators", "nb");
t.add("This value should be less than {{ compared_value }}.", "Verdien skal v\u00e6re mindre enn {{ compared_value }}.", "validators", "nb");
t.add("This value should be less than or equal to {{ compared_value }}.", "Verdien skal v\u00e6re mindre enn eller lik {{ compared_value }}.", "validators", "nb");
t.add("This value should not be equal to {{ compared_value }}.", "Verdien skal ikke v\u00e6re lik {{ compared_value }}.", "validators", "nb");
t.add("This value should not be identical to {{ compared_value_type }} {{ compared_value }}.", "Verdien skal ikke v\u00e6re identisk med {{ compared_value_type }} {{ compared_value }}.", "validators", "nb");
t.add("The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.", "Bildeforholdet er for stort ({{ ratio }}). Tillatt bildeforhold er maks {{ max_ratio }}.", "validators", "nb");
t.add("The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.", "Bildeforholdet er for lite ({{ ratio }}). Forventet bildeforhold er minst {{ min_ratio }}.", "validators", "nb");
t.add("The image is square ({{ width }}x{{ height }}px). Square images are not allowed.", "Bildet er en kvadrat ({{ width }}x{{ height }}px). Kvadratiske bilder er ikke tillatt.", "validators", "nb");
t.add("The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.", "Bildet er i liggende retning ({{ width }}x{{ height }}px). Bilder i liggende retning er ikke tillatt.", "validators", "nb");
t.add("The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.", "Bildet er i st\u00e5ende retning ({{ width }}x{{ height }}px). Bilder i st\u00e5ende retning er ikke tillatt.", "validators", "nb");
t.add("An empty file is not allowed.", "Tomme filer er ikke tilatt.", "validators", "nb");
t.add("The host could not be resolved.", "Vertsnavn kunne ikke l\u00f8ses.", "validators", "nb");
t.add("This value does not match the expected {{ charset }} charset.", "Verdien samsvarer ikke med forventet tegnsett {{ charset }}.", "validators", "nb");
t.add("This is not a valid Business Identifier Code (BIC).", "Dette er ikke en gyldig BIC.", "validators", "nb");
t.add("Error", "Feil", "validators", "nb");
t.add("This is not a valid UUID.", "Dette er ikke en gyldig UUID.", "validators", "nb");
t.add("This value should be a multiple of {{ compared_value }}.", "Verdien skal v\u00e6re flertall av {{ compared_value }}.", "validators", "nb");
t.add("This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.", "Business Identifier Code (BIC) er ikke tilknyttet en IBAN {{ iban }}.", "validators", "nb");
t.add("This value should be valid JSON.", "Verdien er ikke gyldig JSON.", "validators", "nb");
t.add("This collection should contain only unique elements.", "Samlingen kan kun inneholde unike elementer.", "validators", "nb");
t.add("This value should be positive.", "Denne verdien m\u00e5 v\u00e6re positiv.", "validators", "nb");
t.add("This value should be either positive or zero.", "Denne verdien m\u00e5 v\u00e6re positiv eller null.", "validators", "nb");
t.add("This value should be negative.", "Denne verdien m\u00e5 v\u00e6re negativ.", "validators", "nb");
t.add("This value should be either negative or zero.", "Denne verdien m\u00e5 v\u00e6re negativ eller null.", "validators", "nb");
t.add("This value is not a valid timezone.", "Verdien er ikke en gyldig tidssone.", "validators", "nb");
t.add("This password has been leaked in a data breach, it must not be used. Please use another password.", "Dette passordet er lekket i et datainnbrudd, det m\u00e5 ikke tas i bruk. Vennligst bruk et annet passord.", "validators", "nb");
t.add("This value should be between {{ min }} and {{ max }}.", "Verdien m\u00e5 v\u00e6re mellom {{ min }} og {{ max }}.", "validators", "nb");
t.add("This value is not a valid hostname.", "Denne verdien er ikke et gyldig vertsnavn.", "validators", "nb");
t.add("The number of elements in this collection should be a multiple of {{ compared_value }}.", "Antall elementer i denne samlingen b\u00f8r v\u00e6re et multiplum av {{ compared_value }}.", "validators", "nb");
t.add("This value should satisfy at least one of the following constraints:", "Denne verdien skal tilfredsstille minst en av f\u00f8lgende begrensninger:", "validators", "nb");
t.add("Each element of this collection should satisfy its own set of constraints.", "Hvert element i denne samlingen skal tilfredsstille sitt eget sett med begrensninger.", "validators", "nb");
t.add("This value is not a valid International Securities Identification Number (ISIN).", "Denne verdien er ikke et gyldig International Securities Identification Number (ISIN).", "validators", "nb");
t.add("This value should be a valid expression.", "Denne verdien skal v\u00e6re et gyldig uttrykk.", "validators", "nb");
t.add("This value is not a valid CSS color.", "Denne verdien er ikke en gyldig CSS-farge.", "validators", "nb");
t.add("This value is not a valid CIDR notation.", "Denne verdien er ikke en gyldig CIDR-notasjon.", "validators", "nb");
t.add("The value of the netmask should be between {{ min }} and {{ max }}.", "Verdien p\u00e5 nettmasken skal v\u00e6re mellom {{ min }} og {{ max }}.", "validators", "nb");
t.add("This form should not contain extra fields.", "Feltgruppen m\u00e5 ikke inneholde ekstra felter.", "validators", "nb");
t.add("The uploaded file was too large. Please try to upload a smaller file.", "Den opplastede filen var for stor. Vennligst last opp en mindre fil.", "validators", "nb");
t.add("The CSRF token is invalid.", "CSRF n\u00f8kkelen er ugyldig.", "validators", "nb");
t.add("This value is not a valid HTML5 color.", "Denne verdien er ikke en gyldig HTML5-farge.", "validators", "nb");
t.add("Please enter a valid birthdate.", "Vennligst oppgi gyldig f\u00f8dselsdato.", "validators", "nb");
t.add("The selected choice is invalid.", "Det valgte valget er ugyldig.", "validators", "nb");
t.add("The collection is invalid.", "Samlingen er ugyldig.", "validators", "nb");
t.add("Please select a valid color.", "Velg en gyldig farge.", "validators", "nb");
t.add("Please select a valid country.", "Vennligst velg et gyldig land.", "validators", "nb");
t.add("Please select a valid currency.", "Vennligst velg en gyldig valuta.", "validators", "nb");
t.add("Please choose a valid date interval.", "Vennligst velg et gyldig datointervall.", "validators", "nb");
t.add("Please enter a valid date and time.", "Vennligst angi en gyldig dato og tid.", "validators", "nb");
t.add("Please enter a valid date.", "Vennligst oppgi en gyldig dato.", "validators", "nb");
t.add("Please select a valid file.", "Vennligst velg en gyldig fil.", "validators", "nb");
t.add("The hidden field is invalid.", "Det skjulte feltet er ugyldig.", "validators", "nb");
t.add("Please enter an integer.", "Vennligst skriv inn et heltall.", "validators", "nb");
t.add("Please select a valid language.", "Vennligst velg et gyldig spr\u00e5k.", "validators", "nb");
t.add("Please select a valid locale.", "Vennligst velg et gyldig sted.", "validators", "nb");
t.add("Please enter a valid money amount.", "Vennligst angi et gyldig pengebel\u00f8p.", "validators", "nb");
t.add("Please enter a number.", "Vennligst skriv inn et nummer.", "validators", "nb");
t.add("The password is invalid.", "Passordet er ugyldig.", "validators", "nb");
t.add("Please enter a percentage value.", "Vennligst angi en prosentverdi.", "validators", "nb");
t.add("The values do not match.", "Verdiene stemmer ikke overens.", "validators", "nb");
t.add("Please enter a valid time.", "Vennligst angi et gyldig tidspunkt.", "validators", "nb");
t.add("Please select a valid timezone.", "Vennligst velg en gyldig tidssone.", "validators", "nb");
t.add("Please enter a valid URL.", "Vennligst skriv inn en gyldig URL.", "validators", "nb");
t.add("Please enter a valid search term.", "Vennligst angi et gyldig s\u00f8keterm.", "validators", "nb");
t.add("Please provide a valid phone number.", "Vennligst oppgi et gyldig telefonnummer.", "validators", "nb");
t.add("The checkbox has an invalid value.", "Avkrysningsboksen har en ugyldig verdi.", "validators", "nb");
t.add("Please enter a valid email address.", "Vennligst skriv inn en gyldig e-post adresse.", "validators", "nb");
t.add("Please select a valid option.", "Vennligst velg et gyldig alternativ.", "validators", "nb");
t.add("Please select a valid range.", "Vennligst velg et gyldig omr\u00e5de.", "validators", "nb");
t.add("Please enter a valid week.", "Vennligst skriv inn en gyldig uke.", "validators", "nb");
t.add("An authentication exception occurred.", "En autentiseringsfeil har skjedd.", "security", "nb");
t.add("Authentication credentials could not be found.", "P\u00e5loggingsinformasjonen kunne ikke bli funnet.", "security", "nb");
t.add("Authentication request could not be processed due to a system problem.", "Autentiserings foresp\u00f8rselen kunne ikke bli prosessert grunnet en system feil.", "security", "nb");
t.add("Invalid credentials.", "Ugyldig p\u00e5loggingsinformasjon.", "security", "nb");
t.add("Cookie has already been used by someone else.", "Cookie har allerede blitt brukt av noen andre.", "security", "nb");
t.add("Not privileged to request the resource.", "Ingen tilgang til \u00e5 be om gitt ressurs.", "security", "nb");
t.add("Invalid CSRF token.", "Ugyldig CSRF token.", "security", "nb");
t.add("No authentication provider found to support the authentication token.", "Ingen autentiserings tilbyder funnet som st\u00f8tter gitt autentiserings token.", "security", "nb");
t.add("No session available, it either timed out or cookies are not enabled.", "Ingen sesjon tilgjengelig, sesjonen er enten utl\u00f8pt eller cookies ikke skrudd p\u00e5.", "security", "nb");
t.add("No token could be found.", "Ingen token kunne bli funnet.", "security", "nb");
t.add("Username could not be found.", "Brukernavn kunne ikke bli funnet.", "security", "nb");
t.add("Account has expired.", "Brukerkonto har utg\u00e5tt.", "security", "nb");
t.add("Credentials have expired.", "P\u00e5loggingsinformasjon har utl\u00f8pt.", "security", "nb");
t.add("Account is disabled.", "Brukerkonto er deaktivert.", "security", "nb");
t.add("Account is locked.", "Brukerkonto er sperret.", "security", "nb");
t.add("Too many failed login attempts, please try again later.", "For mange mislykkede p\u00e5loggingsfors\u00f8k. Pr\u00f8v igjen senere.", "security", "nb");
t.add("Invalid or expired login link.", "Ugyldig eller utl\u00f8pt p\u00e5loggingskobling.", "security", "nb");
t.add("Too many failed login attempts, please try again in %minutes% minute.", "For mange mislykkede p\u00e5loggingsfors\u00f8k, pr\u00f8v igjen om %minutes% minutt.", "security", "nb");
t.add("Too many failed login attempts, please try again in %minutes% minutes.", "For mange mislykkede p\u00e5loggingsfors\u00f8k, pr\u00f8v igjen om %minutes% minutter.", "security", "nb");
})(Translator);
