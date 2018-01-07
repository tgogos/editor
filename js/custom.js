var cm = null; // codemirror
var doc_str = null;
var greek_extended_markers = [];
var mark_greek_extended = true;

var greek_coptic_markers = [];
var mark_greek_coptic = true;

var latin_red_markers = [];
var mark_latin_red = true;

var unwanted_markers = [];
var mark_unwanted = true;

var punctuation_markers = [];
var mark_punctuation = true;


$(document).ready(function(){

	cm = CodeMirror(document.body,{
		theme:"monokai",
		lineNumbers: true,
	});

	cm.setSize("100%", "100%");
	cm.getDoc().setValue('\n');
	cm.on('change',function(){
		if (mark_greek_extended) {
			clear_greek_extended_markers();
			mark_greek_extended_text();
		}
		if (mark_greek_coptic) {
			clear_greek_coptic_markers();
			mark_greek_coptic_text();
		}
		if (mark_latin_red) {
			clear_latin_red_markers();
			mark_latin_text_red();
		}
		if (mark_punctuation) {
			clear_punctuation_markers();
			mark_punctuation_text();
		}
		if (mark_unwanted) {
			clear_unwanted_markers();
			mark_unwanted_text();
		}
	});

	// add button listeners
	$(".btn-rp-daseia-psili").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/Ἀ|Ἁ|ᾈ|ᾉ|ᾼ/g, "Α");
		doc_str = doc_str.replace(/Ἐ|Ἑ/g,       "Ε");
		doc_str = doc_str.replace(/Ἠ|Ἡ|ᾘ|ᾙ/g,   "Η");
		doc_str = doc_str.replace(/Ἰ|Ἱ/g,       "Ι");
		doc_str = doc_str.replace(/Ὀ|Ὁ/g,       "Ο");
		doc_str = doc_str.replace(/Ὑ/g,         "Υ"); // ypsilon can't take psili
		doc_str = doc_str.replace(/Ὠ|Ὡ|ᾨ|ᾩ/g,   "Ω");

		doc_str = doc_str.replace(/ἀ|ἁ|ᾀ|ᾁ|ᾳ/g, "α");
		doc_str = doc_str.replace(/ἐ|ἑ/g,       "ε");
		doc_str = doc_str.replace(/ἠ|ἡ|ᾐ|ᾑ|ῃ/g, "η");
		doc_str = doc_str.replace(/ἰ|ἱ/g,       "ι");
		doc_str = doc_str.replace(/ὀ|ὁ/g,       "ο");
		doc_str = doc_str.replace(/ὐ|ὑ/g,       "υ");
		doc_str = doc_str.replace(/ὠ|ὡ|ᾠ|ᾡ/g,   "ω");
		cm.getDoc().setValue(doc_str);

	});

	$(".btn-rp-daseia-psili-tonos").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/Ἂ|Ἃ|Ἄ|Ἅ|Ἆ|Ἇ|ᾊ|ᾋ|ᾌ|ᾍ|ᾎ|ᾏ|Ὰ|Ά/g, "Ά");
		doc_str = doc_str.replace(/Ἒ|Ἓ|Ἔ|Ἕ|Ὲ|Έ/g,                 "Έ");
		doc_str = doc_str.replace(/Ἢ|Ἣ|Ἤ|Ἥ|Ἦ|Ἧ|ᾚ|ᾛ|ᾜ|ᾝ|ᾞ|ᾟ|Ὴ|Ή/g, "Ή");
		doc_str = doc_str.replace(/Ἲ|Ἳ|Ἴ|Ἵ|Ἶ|Ἷ|Ὶ|Ί/g,             "Ί");
		doc_str = doc_str.replace(/Ὂ|Ὃ|Ὄ|Ὅ|Ὸ|Ό/g,                 "Ό");
		doc_str = doc_str.replace(/Ὓ|Ὕ|Ὗ|Ὺ|Ύ/g,                   "Ύ");
		doc_str = doc_str.replace(/Ὢ|Ὣ|Ὤ|Ὥ|Ὦ|Ὧ|ᾪ|ᾫ|ᾬ|ᾭ|ᾮ|ᾯ|Ὼ|Ώ/g, "Ώ");

		doc_str = doc_str.replace(/ἂ|ἃ|ἄ|ἅ|ἆ|ἇ|ὰ|ά|ᾂ|ᾃ|ᾄ|ᾅ|ᾆ|ᾇ|ᾲ|ᾴ|ᾶ|ᾷ/g, "ά");
		doc_str = doc_str.replace(/ἒ|ἓ|ἔ|ἕ|ὲ|έ/g,                         "έ");
		doc_str = doc_str.replace(/ἢ|ἣ|ἤ|ἥ|ἦ|ἧ|ὴ|ή|ᾒ|ᾓ|ᾔ|ᾕ|ᾖ|ᾗ|ῂ|ῄ|ῆ|ῇ/g, "ή");
		doc_str = doc_str.replace(/ἲ|ἳ|ἴ|ἵ|ἶ|ἷ|ὶ|ί|ῖ/g,                   "ί");
		doc_str = doc_str.replace(/ῒ|ΐ|ῗ/g,                               "ΐ");
		doc_str = doc_str.replace(/ὂ|ὃ|ὄ|ὅ|ὸ|ό/g,                         "ό");
		doc_str = doc_str.replace(/ὒ|ὓ|ὔ|ὕ|ὖ|ὗ|ὺ|ύ|ῦ/g,                   "ύ");
		doc_str = doc_str.replace(/ῢ|ΰ|ῧ/g,                               "ΰ");
		doc_str = doc_str.replace(/ὢ|ὣ|ὤ|ὥ|ὦ|ὧ|ὼ|ώ|ᾢ|ᾣ|ᾤ|ᾥ|ᾦ|ᾧ|ῲ|ῴ|ῶ|ῷ/g, "ώ");
		cm.getDoc().setValue(doc_str);

	});


	$(".btn-rp-n-grams").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();


		// 2-grams
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)άς(\n| |\,|\.|\!|\;)/g, '$1ας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Άς(\n| |\,|\.|\!|\;)/g, '$1Ας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)άν(\n| |\,|\.|\!|\;)/g, '$1αν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Άν(\n| |\,|\.|\!|\;)/g, '$1Αν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)άχ(\n| |\,|\.|\!|\;)/g, '$1αχ$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Άχ(\n| |\,|\.|\!|\;)/g, '$1Αχ$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)γή(\n| |\,|\.|\!|\;)/g, '$1γη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Γή(\n| |\,|\.|\!|\;)/g, '$1Γη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δέ(\n| |\,|\.|\!|\;)/g, '$1δε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δέ(\n| |\,|\.|\!|\;)/g, '$1Δε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ζώ(\n| |\,|\.|\!|\;)/g, '$1ζω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ζώ(\n| |\,|\.|\!|\;)/g, '$1Ζω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)θά(\n| |\,|\.|\!|\;)/g, '$1θα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Θά(\n| |\,|\.|\!|\;)/g, '$1Θα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)θέ(\n| |\,|\.|\!|\;)/g, '$1θε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Θέ(\n| |\,|\.|\!|\;)/g, '$1Θε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μά(\n| |\,|\.|\!|\;)/g, '$1μα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μά(\n| |\,|\.|\!|\;)/g, '$1Μα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μέ(\n| |\,|\.|\!|\;)/g, '$1με$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μέ(\n| |\,|\.|\!|\;)/g, '$1Με$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μή(\n| |\,|\.|\!|\;)/g, '$1μη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μή(\n| |\,|\.|\!|\;)/g, '$1Μη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)νά(\n| |\,|\.|\!|\;)/g, '$1να$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Νά(\n| |\,|\.|\!|\;)/g, '$1Να$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πώ(\n| |\,|\.|\!|\;)/g, '$1πω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πώ(\n| |\,|\.|\!|\;)/g, '$1Πω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)σέ(\n| |\,|\.|\!|\;)/g, '$1σε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Σέ(\n| |\,|\.|\!|\;)/g, '$1Σε$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)σύ(\n| |\,|\.|\!|\;)/g, '$1συ$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Σύ(\n| |\,|\.|\!|\;)/g, '$1Συ$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τά(\n| |\,|\.|\!|\;)/g, '$1τα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τά(\n| |\,|\.|\!|\;)/g, '$1Τα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τή(\n| |\,|\.|\!|\;)/g, '$1τη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τή(\n| |\,|\.|\!|\;)/g, '$1Τη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τί(\n| |\,|\.|\!|\;)/g, '$1τι$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τί(\n| |\,|\.|\!|\;)/g, '$1Τι$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τό(\n| |\,|\.|\!|\;)/g, '$1το$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τό(\n| |\,|\.|\!|\;)/g, '$1Το$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ώς(\n| |\,|\.|\!|\;)/g, '$1ως$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ώς(\n| |\,|\.|\!|\;)/g, '$1Ως$2');



		// 3-grams
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)βρώ(\n| |\,|\.|\!|\;)/g, '$1βρω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Βρώ(\n| |\,|\.|\!|\;)/g, '$1Βρω$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)γιά(\n| |\,|\.|\!|\;)/g, '$1για$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Γιά(\n| |\,|\.|\!|\;)/g, '$1Για$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)γής(\n| |\,|\.|\!|\;)/g, '$1γης$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Γής(\n| |\,|\.|\!|\;)/g, '$1Γης$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δεί(\n| |\,|\.|\!|\;)/g, '$1δει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δεί(\n| |\,|\.|\!|\;)/g, '$1Δει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δέν(\n| |\,|\.|\!|\;)/g, '$1δεν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δέν(\n| |\,|\.|\!|\;)/g, '$1Δεν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δές(\n| |\,|\.|\!|\;)/g, '$1δες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δές(\n| |\,|\.|\!|\;)/g, '$1Δες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δυό(\n| |\,|\.|\!|\;)/g, '$1δυο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δυό(\n| |\,|\.|\!|\;)/g, '$1Δυο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ζεί(\n| |\,|\.|\!|\;)/g, '$1ζει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ζεί(\n| |\,|\.|\!|\;)/g, '$1Ζει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)θές(\n| |\,|\.|\!|\;)/g, '$1θες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Θές(\n| |\,|\.|\!|\;)/g, '$1Θες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)καί(\n| |\,|\.|\!|\;)/g, '$1και$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Καί(\n| |\,|\.|\!|\;)/g, '$1Και$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)λές(\n| |\,|\.|\!|\;)/g, '$1λες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Λές(\n| |\,|\.|\!|\;)/g, '$1Λες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μάς(\n| |\,|\.|\!|\;)/g, '$1μας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μάς(\n| |\,|\.|\!|\;)/g, '$1Μας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μές(\n| |\,|\.|\!|\;)/g, '$1μες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μές(\n| |\,|\.|\!|\;)/g, '$1Μες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μήν(\n| |\,|\.|\!|\;)/g, '$1μην$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μήν(\n| |\,|\.|\!|\;)/g, '$1Μην$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μιά(\n| |\,|\.|\!|\;)/g, '$1μια$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μιά(\n| |\,|\.|\!|\;)/g, '$1Μια$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μού(\n| |\,|\.|\!|\;)/g, '$1μου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μού(\n| |\,|\.|\!|\;)/g, '$1Μου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ναί(\n| |\,|\.|\!|\;)/g, '$1ναι$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ναί(\n| |\,|\.|\!|\;)/g, '$1Ναι$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)νού(\n| |\,|\.|\!|\;)/g, '$1νου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Νού(\n| |\,|\.|\!|\;)/g, '$1Νου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πάς(\n| |\,|\.|\!|\;)/g, '$1πας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πάς(\n| |\,|\.|\!|\;)/g, '$1Πας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πεί(\n| |\,|\.|\!|\;)/g, '$1πει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πεί(\n| |\,|\.|\!|\;)/g, '$1Πει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πές(\n| |\,|\.|\!|\;)/g, '$1πες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πές(\n| |\,|\.|\!|\;)/g, '$1Πες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πιά(\n| |\,|\.|\!|\;)/g, '$1πια$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πιά(\n| |\,|\.|\!|\;)/g, '$1Πια$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πιό(\n| |\,|\.|\!|\;)/g, '$1πιο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πιό(\n| |\,|\.|\!|\;)/g, '$1Πιο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πού(\n| |\,|\.|\!|\;)/g, '$1που$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πού(\n| |\,|\.|\!|\;)/g, '$1Που$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πώς(\n| |\,|\.|\!|\;)/g, '$1πως$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πώς(\n| |\,|\.|\!|\;)/g, '$1Πως$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)σάς(\n| |\,|\.|\!|\;)/g, '$1σας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Σάς(\n| |\,|\.|\!|\;)/g, '$1Σας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)σάν(\n| |\,|\.|\!|\;)/g, '$1σαν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Σάν(\n| |\,|\.|\!|\;)/g, '$1Σαν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)σού(\n| |\,|\.|\!|\;)/g, '$1σου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Σού(\n| |\,|\.|\!|\;)/g, '$1Σου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στά(\n| |\,|\.|\!|\;)/g, '$1στα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στά(\n| |\,|\.|\!|\;)/g, '$1Στα$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στή(\n| |\,|\.|\!|\;)/g, '$1στη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στή(\n| |\,|\.|\!|\;)/g, '$1Στη$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στό(\n| |\,|\.|\!|\;)/g, '$1στο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στό(\n| |\,|\.|\!|\;)/g, '$1Στο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τήν(\n| |\,|\.|\!|\;)/g, '$1την$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τήν(\n| |\,|\.|\!|\;)/g, '$1Την$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τής(\n| |\,|\.|\!|\;)/g, '$1της$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τής(\n| |\,|\.|\!|\;)/g, '$1Της$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τίς(\n| |\,|\.|\!|\;)/g, '$1τις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τίς(\n| |\,|\.|\!|\;)/g, '$1Τις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τόν(\n| |\,|\.|\!|\;)/g, '$1τον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τόν(\n| |\,|\.|\!|\;)/g, '$1Τον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τού(\n| |\,|\.|\!|\;)/g, '$1του$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τού(\n| |\,|\.|\!|\;)/g, '$1Του$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τών(\n| |\,|\.|\!|\;)/g, '$1των$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τών(\n| |\,|\.|\!|\;)/g, '$1Των$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)φώς(\n| |\,|\.|\!|\;)/g, '$1φως$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Φώς(\n| |\,|\.|\!|\;)/g, '$1Φως$2');
		
		


		// 4-grams
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)βρές(\n| |\,|\.|\!|\;)/g, '$1βρες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Βρές(\n| |\,|\.|\!|\;)/g, '$1Βρες$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)βγεί(\n| |\,|\.|\!|\;)/g, '$1βγει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Βγεί(\n| |\,|\.|\!|\;)/g, '$1Βγει$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)δείς(\n| |\,|\.|\!|\;)/g, '$1δεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Δείς(\n| |\,|\.|\!|\;)/g, '$1Δεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ζείς(\n| |\,|\.|\!|\;)/g, '$1ζεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ζείς(\n| |\,|\.|\!|\;)/g, '$1Ζεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μιάν(\n| |\,|\.|\!|\;)/g, '$1μιαν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μιάν(\n| |\,|\.|\!|\;)/g, '$1Μιαν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μιάς(\n| |\,|\.|\!|\;)/g, '$1μιας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μιάς(\n| |\,|\.|\!|\;)/g, '$1Μιας$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)νούς(\n| |\,|\.|\!|\;)/g, '$1νους$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Νούς(\n| |\,|\.|\!|\;)/g, '$1Νους$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πείς(\n| |\,|\.|\!|\;)/g, '$1πεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πείς(\n| |\,|\.|\!|\;)/g, '$1Πεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ποιό(\n| |\,|\.|\!|\;)/g, '$1ποιο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ποιό(\n| |\,|\.|\!|\;)/g, '$1Ποιο$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πρίν(\n| |\,|\.|\!|\;)/g, '$1πριν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πρίν(\n| |\,|\.|\!|\;)/g, '$1Πριν$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)πρός(\n| |\,|\.|\!|\;)/g, '$1προς$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Πρός(\n| |\,|\.|\!|\;)/g, '$1Προς$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στήν(\n| |\,|\.|\!|\;)/g, '$1στην$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στήν(\n| |\,|\.|\!|\;)/g, '$1Στην$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στής(\n| |\,|\.|\!|\;)/g, '$1στης$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στής(\n| |\,|\.|\!|\;)/g, '$1Στης$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στίς(\n| |\,|\.|\!|\;)/g, '$1στις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στίς(\n| |\,|\.|\!|\;)/g, '$1Στις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στόν(\n| |\,|\.|\!|\;)/g, '$1στον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στόν(\n| |\,|\.|\!|\;)/g, '$1Στον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στού(\n| |\,|\.|\!|\;)/g, '$1στου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στού(\n| |\,|\.|\!|\;)/g, '$1Στου$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)τούς(\n| |\,|\.|\!|\;)/g, '$1τους$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Τούς(\n| |\,|\.|\!|\;)/g, '$1Τους$2');



		// 5-grams
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)βγείς(\n| |\,|\.|\!|\;)/g, '$1βγεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Βγείς(\n| |\,|\.|\!|\;)/g, '$1Βγεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)βρείς(\n| |\,|\.|\!|\;)/g, '$1βρεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Βρείς(\n| |\,|\.|\!|\;)/g, '$1Βρεις$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)μπρός(\n| |\,|\.|\!|\;)/g, '$1μπρος$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Μπρός(\n| |\,|\.|\!|\;)/g, '$1Μπρος$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ποιόν(\n| |\,|\.|\!|\;)/g, '$1ποιον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ποιόν(\n| |\,|\.|\!|\;)/g, '$1Ποιον$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)ποιός(\n| |\,|\.|\!|\;)/g, '$1ποιος$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Ποιός(\n| |\,|\.|\!|\;)/g, '$1Ποιος$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)στούς(\n| |\,|\.|\!|\;)/g, '$1στους$2');
		doc_str = doc_str.replace(/(\n| |\,|\.|\!|\;)Στούς(\n| |\,|\.|\!|\;)/g, '$1Στους$2');
				
		
		cm.getDoc().setValue(doc_str);

	});




	$(".btn-fix-single-quotes").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		// doc_str = doc_str.replace(/\᾿|\’|\‘|\᾽/g, '\'');
		doc_str = doc_str.replace(/\’|\‘|\᾽|΄|ʼ|ʽ/g, '\'');
		cm.getDoc().setValue(doc_str);

	});




	$(".btn-fix-micro-sign").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/µ/g, 'μ');
		cm.getDoc().setValue(doc_str);

	});



	$(".btn-fix-psili").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/᾿/g, '\'');
		cm.getDoc().setValue(doc_str);

	});



	$(".btn-fix-diacritics").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();


		// fix [diacritic]+[character] to one single character
		// ===================================================

		// Case:
		// (᾽) Greek Koronis, U+1FBD OR    
		// (᾿) Greek Psili: U+1FBF
		
		doc_str = doc_str.replace(/(᾽|᾿)Α/g, 'Ἀ')  // (Ἀ) Greek Capital Letter Alpha with Psili: U+1F08
						 .replace(/(᾽|᾿)Ε/g, 'Ἐ')  // (Ἐ) Greek Capital Letter Epsilon with Psili: U+1F18
						 .replace(/(᾽|᾿)Η/g, 'Ἠ')  // (Ἠ) Greek Capital Letter Eta with Psili: U+1F28
						 .replace(/(᾽|᾿)Ι/g, 'Ἰ')  // (Ἰ) Greek Capital Letter Iota with Psili: U+1F38
						 .replace(/(᾽|᾿)Ο/g, 'Ὀ')  // (Ὀ) Greek Capital Letter Omicron with Psili: U+1F48
						                           //     Greek Capital Letter Upsilon with Psili does not exist
						 .replace(/(᾽|᾿)Ω/g, 'Ὠ')  // (Ὠ) Greek Capital Letter Omega with Psili: U+1F68

		// Case:
		// (῍) Greek Psili and Varia: U+1FCD
						 .replace(/῍Α/g, 'Ἂ')  // (Ἂ) Greek Capital Letter Alpha with Psili and Varia: U+1F0A
						 .replace(/῍Ε/g, 'Ἒ')  // (Ἒ) Greek Capital Letter Epsilon with Psili and Varia: U+1F1A
						 .replace(/῍Η/g, 'Ἢ')  // (Ἢ) Greek Capital Letter Eta with Psili and Varia: U+1F2A
						 .replace(/῍Ι/g, 'Ἲ')  // (Ἲ) Greek Capital Letter Iota with Psili and Varia: U+1F3A
						 .replace(/῍Ο/g, 'Ὂ')  // (Ὂ) Greek Capital Letter Omicron with Psili and Varia: U+1F4A
						                       //     Greek Capital Letter Upsilon with Psili and Varia does not exist
						 .replace(/῍Ω/g, 'Ὢ')  // (Ὢ) Greek Capital Letter Omega with Psili and Varia: U+1F6A

		// Case:
		// (῎) Greek Psili and Oxia: U+1FCE
						 .replace(/῎Α/g, 'Ἄ')  // (Ἄ) Greek Capital Letter Alpha with Psili and Oxia: U+1F0C
						 .replace(/῎Ε/g, 'Ἔ')  // (Ἔ) Greek Capital Letter Epsilon with Psili and Oxia: U+1F1C
						 .replace(/῎Η/g, 'Ἤ')  // (Ἤ) Greek Capital Letter Eta with Psili and Oxia: U+1F2C
						 .replace(/῎Ι/g, 'Ἴ')  // (Ἴ) Greek Capital Letter Iota with Psili and Oxia: U+1F3C
						 .replace(/῎Ο/g, 'Ὄ')  // (Ὄ) Greek Capital Letter Omicron with Psili and Oxia: U+1F4C
						                       //     Greek Capital Letter Upsilon with Psili and Oxia does not exist
						 .replace(/῎Ω/g, 'Ὤ')  // (Ὤ) Greek Capital Letter Omega with Psili and Oxia: U+1F6C

		// Case:
		// (῏) Greek Psili and Perispomeni: U+1FCF
						 .replace(/῏Α/g, 'Ἆ')  // (Ἆ) Greek Capital Letter Alpha with Psili and Perispomeni: U+1F0E
						                       //     Greek Capital Letter Epsilon with Psili and Perispomeni does not exist
						 .replace(/῏Η/g, 'Ἦ')  // (Ἦ) Greek Capital Letter Eta with Psili and Perispomeni: U+1F2E
						 .replace(/῏Ι/g, 'Ἶ')  // (Ἶ) Greek Capital Letter Iota with Psili and Perispomeni: U+1F3E
						                       //     Greek Capital Letter Omicron with Psili and Perispomeni does not exist
						                       //     Greek Capital Letter Ypsilon with Psili and Perispomeni does not exist
						 .replace(/῏Ω/g, 'Ὦ')  // (Ὦ) Greek Capital Letter Omega with Psili and Perispomeni: U+1F6E

	 	// Case:
		// (῏) Greek Psili and Perispomeni: U+1FCF
						 .replace(/῏Α/g, '')  //
						 .replace(/῏Ε/g, '')  //
						 .replace(/῏Η/g, '')  //
						 .replace(/῏Ι/g, '')  //
						 .replace(/῏Ο/g, '')  //
						 .replace(/῏Υ/g, '')  //
						 .replace(/῏Ω/g, '')  //

		// Case:
		//
						 .replace(/Α/g, '')  //
						 .replace(/Ε/g, '')  //
						 .replace(/Η/g, '')  //
						 .replace(/Ι/g, '')  //
						 .replace(/Ο/g, '')  //
						 .replace(/Υ/g, '')  //
						 .replace(/Ω/g, '')  //

	 	// Case:
		//
						 .replace(/Α/g, '')  //
						 .replace(/Ε/g, '')  //
						 .replace(/Η/g, '')  //
						 .replace(/Ι/g, '')  //
						 .replace(/Ο/g, '')  //
						 .replace(/Υ/g, '')  //
						 .replace(/Ω/g, '')  //

		cm.getDoc().setValue(doc_str);

	});




	// mark greek extended

	$(".btn-mark-greek-ext").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		// var checkBox = $(".btn-mark-greek-ext input");
		// checkBox.prop("checked", !checkBox.prop("checked"));
		$(".btn-mark-greek-ext input").trigger('click');

	});
	$(".btn-mark-greek-ext input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-greek-ext input").change( function(event){
		// event.preventDefault();
		event.stopPropagation();
		mark_greek_extended = this.checked;
		if (mark_greek_extended) {
			mark_greek_extended_text();
		} else {
			clear_greek_extended_markers();
		}
	});




	// mark greek

	$(".btn-mark-greek-coptic").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		// var checkBox = $(".btn-mark-greek-coptic input");
		// checkBox.prop("checked", !checkBox.prop("checked"));
		$(".btn-mark-greek-coptic input").trigger('click');

	});
	$(".btn-mark-greek-coptic input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-greek-coptic input").change( function(event){
		// event.preventDefault();
		event.stopPropagation();
		mark_greek_coptic = this.checked;
		if (mark_greek_coptic) {
			mark_greek_coptic_text();
		} else {
			clear_greek_coptic_markers();
		}

	});




	// mark basic-latin 

	$(".btn-mark-latin-red").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".btn-mark-latin-red input").trigger('click');

	});
	$(".btn-mark-latin-red input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-latin-red input").change( function(event){
		event.stopPropagation();
		mark_latin_red = this.checked;
		if (mark_latin_red) {
			mark_latin_text_red();
		} else {
			clear_latin_red_markers();
		}

	});





	// mark unwanted 

	$(".btn-mark-unwanted").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".btn-mark-unwanted input").trigger('click');

	});
	$(".btn-mark-unwanted input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-unwanted input").change( function(event){
		event.stopPropagation();
		mark_unwanted = this.checked;
		if (mark_unwanted) {
			mark_unwanted_text();
		} else {
			clear_unwanted_markers();
		}

	});




	// mark punctuation

	$(".btn-mark-punctuation").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".btn-mark-punctuation input").trigger('click');

	});
	$(".btn-mark-punctuation input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-punctuation input").change( function(event){
		event.stopPropagation();
		mark_punctuation = this.checked;
		if (mark_punctuation) {
			mark_punctuation_text();
		} else {
			clear_punctuation_markers();
		}

	});
});



// .match(/[\u0370-\u03FF]|[0-9]| |\n|\(|\)|\-|\,|'|\./g)


function clear_greek_extended_markers() {
	greek_extended_markers.forEach(marker => marker.clear());
}

function clear_greek_coptic_markers() {
	greek_coptic_markers.forEach(marker => marker.clear());
}

function clear_latin_red_markers() {
	latin_red_markers.forEach(marker => marker.clear());
}

function clear_unwanted_markers() {
	unwanted_markers.forEach(marker => marker.clear());
}

function clear_punctuation_markers() {
	punctuation_markers.forEach(marker => marker.clear());
}


function mark_greek_extended_text() {
	// console.log("mark_greek_extended was called...");
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var start_new_mark = true;

	for (var i=0; i<lines.length; i++) {
		for (var j=0; j<lines[i].length; j++) {
			if (start_new_mark) {
				from.line = i;
				from.ch   = j;
			}
			if (lines[i][j].match(/[\u1F00-\u1FFF]/g) != null) {
				to.line = i;
				to.ch   = j+1;
				start_new_mark = false;
			} else {
				greek_extended_markers.push(cm.markText(from,to,{className: "gr-ext"}));
				start_new_mark = true;
			}
		}
	}
}


function mark_greek_coptic_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var start_new_mark = true;

	for (var i=0; i<lines.length; i++) {
		for (var j=0; j<lines[i].length; j++) {
			if (start_new_mark) {
				from.line = i;
				from.ch   = j;
			}
			if (lines[i][j].match(/[\u0370-\u03FF]/g) != null) {
				to.line = i;
				to.ch   = j+1;
				start_new_mark = false;
			} else {
				greek_coptic_markers.push(cm.markText(from,to,{className: "gr-coptic"}));
				start_new_mark = true;
			}
		}
	}
}


function mark_latin_text_red() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var start_new_mark = true;

	for (var i=0; i<lines.length; i++) {
		for (var j=0; j<lines[i].length; j++) {
			if (start_new_mark) {
				from.line = i;
				from.ch   = j;
			}
			if (lines[i][j].match(/[\u003C-\u007F]/g) != null) {
				to.line = i;
				to.ch   = j+1;
				start_new_mark = false;
			} else {
				latin_red_markers.push(cm.markText(from,to,{className: "latin-red"}));
				start_new_mark = true;
			}
		}
	}
}




function mark_unwanted_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var start_new_mark = true;

	for (var i=0; i<lines.length; i++) {
		for (var j=0; j<lines[i].length; j++) {
			if (start_new_mark) {
				from.line = i;
				from.ch   = j;
			}

			// CONTROL CHARACTERS
			// \t : U+0009 Horizontal Tabulation

			// BASIC LATIN
			// " : U+0022 Quotation Mark
			// / : U+002F Solidus

			// LATIN-1 SUPPLEMENT
			// µ : U+00B5 Micro Sign
			// · : U+00B7 Middle Dot

			// SPACING MODIFIER LETTERS
			// ˙ : U+02D9 Dot Above

			// GREEK AND COPTIC
			// ΄ : U+0384 Greek Tonos

			// GREEK EXTENDED 
			// ᾽ : U+1FBD Greek Koronis
			// ι : U+1FBE Greek Prosgegrammeni
			// ᾿ : U+1FBF Greek Psili
			// ῀ : U+1FC0 Greek Perispomeni
			// ῁ : U+1FC1 Greek Dialytika and Perispomeni
			// ῍ : U+1FCD Greek Psili and Varia
			// ῎ : U+1FCE Greek Psili and Oxia
			// ῏ : U+1FCF Greek Psili and Perispomeni
			// ῝ : U+1FDD Greek Dasia and Varia
			// ῞ : U+1FDE Greek Dasia and Oxia
			// ῟ : U+1FDF Greek Dasia and Perispomeni
			// ῭ : U+1FED Greek Dialytika and Varia
			// ΅ : U+1FEE Greek Dialytika and Oxia
			// ` : U+1FEF Greek Varia
			// ´ : U+1FFD Greek Oxia
			// ῾ : U+1FFE Greek Dasia

			// GENERAL PUNCTUATION
			// ‘ : U+2018 Left Single Quotation Mark
			// ’ : U+2019 Right Single Quotation Mark
			// “ : U+201C Left Double Quotation Mark
			// ” : U+201D Right Double Quotation Mark

			// IPA EXTENSIONS
			// ʼ : U+02BC Modifier Letter Apostrophe
			// ʽ : U+02BD Modifier Letter Reversed Comma

			if (lines[i][j].match(/\t|\"|\/|µ|·|˙|΄|᾽|ι|᾿|῀|῁|῍|῎|῏|῝|῞|῟|῭|΅|`|´|῾|\‘|\’|“|”|ʻ|ʽ/g) != null) {
				to.line = i;
				to.ch   = j+1;
				start_new_mark = false;
			} else {
				unwanted_markers.push(cm.markText(from,to,{className: "unwanted"}));
				start_new_mark = true;
			}
		}
	}
}




function mark_punctuation_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var start_new_mark = true;

	for (var i=0; i<lines.length; i++) {
		for (var j=0; j<lines[i].length; j++) {
			if (start_new_mark) {
				from.line = i;
				from.ch   = j;
			}
			if (lines[i][j].match(/\.|\,|\'| |…|:|;|;|!|«|»|-/g) != null) {
				to.line = i;
				to.ch   = j+1;
				start_new_mark = false;
			} else {
				punctuation_markers.push(cm.markText(from,to,{className: "punctuation"}));
				start_new_mark = true;
			}
		}
	}
}
