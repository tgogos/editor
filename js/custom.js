// -------------------------------------------        Settings        -------------------------------------------
var cm        = null; // codemirror
var doc_str   = null;
var word_wrap = true;
var font_size = 14;


// ------------------------------------------- Character Highlighting -------------------------------------------

// arrays used for storing character highlighting (marking) set to code mirror
var greek_extended_markers = [];
var greek_coptic_markers   = [];
var number_markers         = [];
var latin_red_markers      = [];
var unwanted_markers       = [];
var punctuation_markers    = [];

// UI settings (checkboxes) start by default true
var mark_greek_extended = true;
var mark_greek_coptic   = true;
var mark_numbers        = true;
var mark_latin_red      = true;
var mark_unwanted       = true;
var mark_punctuation    = true;

// Character lists to be used with the highlighting function: mark()
var char_list_punctuation    = ['\t', '\.', '\,', '\’', ' ', '…', ':', ';', ';', '!', '«', '»', '-'].join('|');
var char_list_greek_extended = "[\\u1F00-\\u1FFF]";
var char_list_greek_coptic   = "[\\u0370-\\u03FF]";
var char_list_numbers        = "[\\u0028-\\u002b]|[\\u002f-\\u0039]";
var char_list_latin          = "[\\u003C-\\u007F]";

// string values of CSS class names for highlighting characters
var char_class_punctuation = "punctuation";
var char_class_gr_ext      = "gr-ext";
var char_class_gr_coptic   = "gr-coptic";
var char_class_numbers     = "num";
var char_class_latin       = "latin";

// ------------------------------------------- - - - - - - - - - - - - ------------------------------------------





$(document).ready(function(){

	cm = CodeMirror(document.body,{
		theme:"monokai",
		lineNumbers: true,
		lineWrapping: word_wrap
	});

	cm.setSize("100%", "100%");
	cm.focus();
	// cm.getDoc().setValue('\n');
	cm.on('change',function(){
		if (mark_greek_extended) {
			clear_greek_extended_markers();
			mark_greek_extended_text();
		}
		if (mark_greek_coptic) {
			clear_greek_coptic_markers();
			mark_greek_coptic_text();
		}
		if (mark_numbers) {
			clear_number_markers();
			mark_numbers_text();
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
		doc_str = doc_str
		.replace(/Ἀ|Ἁ|ᾈ|ᾉ|ᾼ/g, "Α")
		.replace(/Ἐ|Ἑ/g,       "Ε")
		.replace(/Ἠ|Ἡ|ᾘ|ᾙ/g,   "Η")
		.replace(/Ἰ|Ἱ/g,       "Ι")
		.replace(/Ὀ|Ὁ/g,       "Ο")
		.replace(/Ὑ/g,         "Υ") // ypsilon can't take psili
		.replace(/Ὠ|Ὡ|ᾨ|ᾩ/g,   "Ω")
		.replace(/Ῥ/g,         "Ρ");

		doc_str = doc_str
		.replace(/ἀ|ἁ|ᾀ|ᾁ|ᾳ/g, "α")
		.replace(/ἐ|ἑ/g,       "ε")
		.replace(/ἠ|ἡ|ᾐ|ᾑ|ῃ/g, "η")
		.replace(/ἰ|ἱ/g,       "ι")
		.replace(/ὀ|ὁ/g,       "ο")
		.replace(/ὐ|ὑ/g,       "υ")
		.replace(/ὠ|ὡ|ᾠ|ᾡ/g,   "ω")
		.replace(/ῤ|ῥ/g,       "ρ");
		cm.getDoc().setValue(doc_str);

	});

	$(".btn-rp-daseia-psili-tonos").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str
		.replace(/Ἂ|Ἃ|Ἄ|Ἅ|Ἆ|Ἇ|ᾊ|ᾋ|ᾌ|ᾍ|ᾎ|ᾏ|Ὰ|Ά/g, "Ά")
		.replace(/Ἒ|Ἓ|Ἔ|Ἕ|Ὲ|Έ/g,                 "Έ")
		.replace(/Ἢ|Ἣ|Ἤ|Ἥ|Ἦ|Ἧ|ᾚ|ᾛ|ᾜ|ᾝ|ᾞ|ᾟ|Ὴ|Ή/g, "Ή")
		.replace(/Ἲ|Ἳ|Ἴ|Ἵ|Ἶ|Ἷ|Ὶ|Ί/g,             "Ί")
		.replace(/Ὂ|Ὃ|Ὄ|Ὅ|Ὸ|Ό/g,                 "Ό")
		.replace(/Ὓ|Ὕ|Ὗ|Ὺ|Ύ/g,                   "Ύ")
		.replace(/Ὢ|Ὣ|Ὤ|Ὥ|Ὦ|Ὧ|ᾪ|ᾫ|ᾬ|ᾭ|ᾮ|ᾯ|Ὼ|Ώ/g, "Ώ");

		doc_str = doc_str
		.replace(/ἂ|ἃ|ἄ|ἅ|ἆ|ἇ|ὰ|ά|ᾂ|ᾃ|ᾄ|ᾅ|ᾆ|ᾇ|ᾲ|ᾴ|ᾶ|ᾷ/g, "ά")
		.replace(/ἒ|ἓ|ἔ|ἕ|ὲ|έ/g,                         "έ")
		.replace(/ἢ|ἣ|ἤ|ἥ|ἦ|ἧ|ὴ|ή|ᾒ|ᾓ|ᾔ|ᾕ|ᾖ|ᾗ|ῂ|ῄ|ῆ|ῇ/g, "ή")
		.replace(/ἲ|ἳ|ἴ|ἵ|ἶ|ἷ|ὶ|ί|ῖ/g,                   "ί")
		.replace(/ῒ|ΐ|ῗ/g,                               "ΐ")
		.replace(/ὂ|ὃ|ὄ|ὅ|ὸ|ό/g,                         "ό")
		.replace(/ὒ|ὓ|ὔ|ὕ|ὖ|ὗ|ὺ|ύ|ῦ/g,                   "ύ")
		.replace(/ῢ|ΰ|ῧ/g,                               "ΰ")
		.replace(/ὢ|ὣ|ὤ|ὥ|ὦ|ὧ|ὼ|ώ|ᾢ|ᾣ|ᾤ|ᾥ|ᾦ|ᾧ|ῲ|ῴ|ῶ|ῷ/g, "ώ");
		cm.getDoc().setValue(doc_str);

	});


	$(".btn-rp-n-grams").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();


		// 2-grams
		doc_str = doc_str
		.replace(/(\n| |\,|\.|\!|\;)άς(\n| |\,|\.|\!|\;)/g, '$1ας$2')
		.replace(/(\n| |\,|\.|\!|\;)Άς(\n| |\,|\.|\!|\;)/g, '$1Ας$2')
		.replace(/(\n| |\,|\.|\!|\;)άν(\n| |\,|\.|\!|\;)/g, '$1αν$2')
		.replace(/(\n| |\,|\.|\!|\;)Άν(\n| |\,|\.|\!|\;)/g, '$1Αν$2')
		.replace(/(\n| |\,|\.|\!|\;)άχ(\n| |\,|\.|\!|\;)/g, '$1αχ$2')
		.replace(/(\n| |\,|\.|\!|\;)Άχ(\n| |\,|\.|\!|\;)/g, '$1Αχ$2')
		.replace(/(\n| |\,|\.|\!|\;)γή(\n| |\,|\.|\!|\;)/g, '$1γη$2')
		.replace(/(\n| |\,|\.|\!|\;)Γή(\n| |\,|\.|\!|\;)/g, '$1Γη$2')
		.replace(/(\n| |\,|\.|\!|\;)δέ(\n| |\,|\.|\!|\;)/g, '$1δε$2')
		.replace(/(\n| |\,|\.|\!|\;)Δέ(\n| |\,|\.|\!|\;)/g, '$1Δε$2')
		.replace(/(\n| |\,|\.|\!|\;)ζώ(\n| |\,|\.|\!|\;)/g, '$1ζω$2')
		.replace(/(\n| |\,|\.|\!|\;)Ζώ(\n| |\,|\.|\!|\;)/g, '$1Ζω$2')
		.replace(/(\n| |\,|\.|\!|\;)θά(\n| |\,|\.|\!|\;)/g, '$1θα$2')
		.replace(/(\n| |\,|\.|\!|\;)Θά(\n| |\,|\.|\!|\;)/g, '$1Θα$2')
		.replace(/(\n| |\,|\.|\!|\;)θέ(\n| |\,|\.|\!|\;)/g, '$1θε$2')
		.replace(/(\n| |\,|\.|\!|\;)Θέ(\n| |\,|\.|\!|\;)/g, '$1Θε$2')
		.replace(/(\n| |\,|\.|\!|\;)μά(\n| |\,|\.|\!|\;)/g, '$1μα$2')
		.replace(/(\n| |\,|\.|\!|\;)Μά(\n| |\,|\.|\!|\;)/g, '$1Μα$2')
		.replace(/(\n| |\,|\.|\!|\;)μέ(\n| |\,|\.|\!|\;)/g, '$1με$2')
		.replace(/(\n| |\,|\.|\!|\;)Μέ(\n| |\,|\.|\!|\;)/g, '$1Με$2')
		.replace(/(\n| |\,|\.|\!|\;)μή(\n| |\,|\.|\!|\;)/g, '$1μη$2')
		.replace(/(\n| |\,|\.|\!|\;)Μή(\n| |\,|\.|\!|\;)/g, '$1Μη$2')
		.replace(/(\n| |\,|\.|\!|\;)νά(\n| |\,|\.|\!|\;)/g, '$1να$2')
		.replace(/(\n| |\,|\.|\!|\;)Νά(\n| |\,|\.|\!|\;)/g, '$1Να$2')
		.replace(/(\n| |\,|\.|\!|\;)πώ(\n| |\,|\.|\!|\;)/g, '$1πω$2')
		.replace(/(\n| |\,|\.|\!|\;)Πώ(\n| |\,|\.|\!|\;)/g, '$1Πω$2')
		.replace(/(\n| |\,|\.|\!|\;)σέ(\n| |\,|\.|\!|\;)/g, '$1σε$2')
		.replace(/(\n| |\,|\.|\!|\;)Σέ(\n| |\,|\.|\!|\;)/g, '$1Σε$2')
		.replace(/(\n| |\,|\.|\!|\;)σύ(\n| |\,|\.|\!|\;)/g, '$1συ$2')
		.replace(/(\n| |\,|\.|\!|\;)Σύ(\n| |\,|\.|\!|\;)/g, '$1Συ$2')
		.replace(/(\n| |\,|\.|\!|\;)τά(\n| |\,|\.|\!|\;)/g, '$1τα$2')
		.replace(/(\n| |\,|\.|\!|\;)Τά(\n| |\,|\.|\!|\;)/g, '$1Τα$2')
		.replace(/(\n| |\,|\.|\!|\;)τή(\n| |\,|\.|\!|\;)/g, '$1τη$2')
		.replace(/(\n| |\,|\.|\!|\;)Τή(\n| |\,|\.|\!|\;)/g, '$1Τη$2')
		.replace(/(\n| |\,|\.|\!|\;)τί(\n| |\,|\.|\!|\;)/g, '$1τι$2')
		.replace(/(\n| |\,|\.|\!|\;)Τί(\n| |\,|\.|\!|\;)/g, '$1Τι$2')
		.replace(/(\n| |\,|\.|\!|\;)τό(\n| |\,|\.|\!|\;)/g, '$1το$2')
		.replace(/(\n| |\,|\.|\!|\;)Τό(\n| |\,|\.|\!|\;)/g, '$1Το$2')
		.replace(/(\n| |\,|\.|\!|\;)ώς(\n| |\,|\.|\!|\;)/g, '$1ως$2')
		.replace(/(\n| |\,|\.|\!|\;)Ώς(\n| |\,|\.|\!|\;)/g, '$1Ως$2');



		// 3-grams
		doc_str = doc_str
		.replace(/(\n| |\,|\.|\!|\;)βρώ(\n| |\,|\.|\!|\;)/g, '$1βρω$2')
		.replace(/(\n| |\,|\.|\!|\;)Βρώ(\n| |\,|\.|\!|\;)/g, '$1Βρω$2')
		.replace(/(\n| |\,|\.|\!|\;)γιά(\n| |\,|\.|\!|\;)/g, '$1για$2')
		.replace(/(\n| |\,|\.|\!|\;)Γιά(\n| |\,|\.|\!|\;)/g, '$1Για$2')
		.replace(/(\n| |\,|\.|\!|\;)γής(\n| |\,|\.|\!|\;)/g, '$1γης$2')
		.replace(/(\n| |\,|\.|\!|\;)Γής(\n| |\,|\.|\!|\;)/g, '$1Γης$2')
		.replace(/(\n| |\,|\.|\!|\;)δεί(\n| |\,|\.|\!|\;)/g, '$1δει$2')
		.replace(/(\n| |\,|\.|\!|\;)Δεί(\n| |\,|\.|\!|\;)/g, '$1Δει$2')
		.replace(/(\n| |\,|\.|\!|\;)δέν(\n| |\,|\.|\!|\;)/g, '$1δεν$2')
		.replace(/(\n| |\,|\.|\!|\;)Δέν(\n| |\,|\.|\!|\;)/g, '$1Δεν$2')
		.replace(/(\n| |\,|\.|\!|\;)δές(\n| |\,|\.|\!|\;)/g, '$1δες$2')
		.replace(/(\n| |\,|\.|\!|\;)Δές(\n| |\,|\.|\!|\;)/g, '$1Δες$2')
		.replace(/(\n| |\,|\.|\!|\;)δυό(\n| |\,|\.|\!|\;)/g, '$1δυο$2')
		.replace(/(\n| |\,|\.|\!|\;)Δυό(\n| |\,|\.|\!|\;)/g, '$1Δυο$2')
		.replace(/(\n| |\,|\.|\!|\;)ζεί(\n| |\,|\.|\!|\;)/g, '$1ζει$2')
		.replace(/(\n| |\,|\.|\!|\;)Ζεί(\n| |\,|\.|\!|\;)/g, '$1Ζει$2')
		.replace(/(\n| |\,|\.|\!|\;)θές(\n| |\,|\.|\!|\;)/g, '$1θες$2')
		.replace(/(\n| |\,|\.|\!|\;)Θές(\n| |\,|\.|\!|\;)/g, '$1Θες$2')
		.replace(/(\n| |\,|\.|\!|\;)καί(\n| |\,|\.|\!|\;)/g, '$1και$2')
		.replace(/(\n| |\,|\.|\!|\;)Καί(\n| |\,|\.|\!|\;)/g, '$1Και$2')
		.replace(/(\n| |\,|\.|\!|\;)λές(\n| |\,|\.|\!|\;)/g, '$1λες$2')
		.replace(/(\n| |\,|\.|\!|\;)Λές(\n| |\,|\.|\!|\;)/g, '$1Λες$2')
		.replace(/(\n| |\,|\.|\!|\;)μάς(\n| |\,|\.|\!|\;)/g, '$1μας$2')
		.replace(/(\n| |\,|\.|\!|\;)Μάς(\n| |\,|\.|\!|\;)/g, '$1Μας$2')
		.replace(/(\n| |\,|\.|\!|\;)μές(\n| |\,|\.|\!|\;)/g, '$1μες$2')
		.replace(/(\n| |\,|\.|\!|\;)Μές(\n| |\,|\.|\!|\;)/g, '$1Μες$2')
		.replace(/(\n| |\,|\.|\!|\;)μήν(\n| |\,|\.|\!|\;)/g, '$1μην$2')
		.replace(/(\n| |\,|\.|\!|\;)Μήν(\n| |\,|\.|\!|\;)/g, '$1Μην$2')
		.replace(/(\n| |\,|\.|\!|\;)μιά(\n| |\,|\.|\!|\;)/g, '$1μια$2')
		.replace(/(\n| |\,|\.|\!|\;)Μιά(\n| |\,|\.|\!|\;)/g, '$1Μια$2')
		.replace(/(\n| |\,|\.|\!|\;)μού(\n| |\,|\.|\!|\;)/g, '$1μου$2')
		.replace(/(\n| |\,|\.|\!|\;)Μού(\n| |\,|\.|\!|\;)/g, '$1Μου$2')
		.replace(/(\n| |\,|\.|\!|\;)ναί(\n| |\,|\.|\!|\;)/g, '$1ναι$2')
		.replace(/(\n| |\,|\.|\!|\;)Ναί(\n| |\,|\.|\!|\;)/g, '$1Ναι$2')
		.replace(/(\n| |\,|\.|\!|\;)νού(\n| |\,|\.|\!|\;)/g, '$1νου$2')
		.replace(/(\n| |\,|\.|\!|\;)Νού(\n| |\,|\.|\!|\;)/g, '$1Νου$2')
		.replace(/(\n| |\,|\.|\!|\;)πάς(\n| |\,|\.|\!|\;)/g, '$1πας$2')
		.replace(/(\n| |\,|\.|\!|\;)Πάς(\n| |\,|\.|\!|\;)/g, '$1Πας$2')
		.replace(/(\n| |\,|\.|\!|\;)πεί(\n| |\,|\.|\!|\;)/g, '$1πει$2')
		.replace(/(\n| |\,|\.|\!|\;)Πεί(\n| |\,|\.|\!|\;)/g, '$1Πει$2')
		.replace(/(\n| |\,|\.|\!|\;)πές(\n| |\,|\.|\!|\;)/g, '$1πες$2')
		.replace(/(\n| |\,|\.|\!|\;)Πές(\n| |\,|\.|\!|\;)/g, '$1Πες$2')
		.replace(/(\n| |\,|\.|\!|\;)πιά(\n| |\,|\.|\!|\;)/g, '$1πια$2')
		.replace(/(\n| |\,|\.|\!|\;)Πιά(\n| |\,|\.|\!|\;)/g, '$1Πια$2')
		.replace(/(\n| |\,|\.|\!|\;)πιό(\n| |\,|\.|\!|\;)/g, '$1πιο$2')
		.replace(/(\n| |\,|\.|\!|\;)Πιό(\n| |\,|\.|\!|\;)/g, '$1Πιο$2')
		.replace(/(\n| |\,|\.|\!|\;)πού(\n| |\,|\.|\!|\;)/g, '$1που$2')
		.replace(/(\n| |\,|\.|\!|\;)Πού(\n| |\,|\.|\!|\;)/g, '$1Που$2')
		.replace(/(\n| |\,|\.|\!|\;)πώς(\n| |\,|\.|\!|\;)/g, '$1πως$2')
		.replace(/(\n| |\,|\.|\!|\;)Πώς(\n| |\,|\.|\!|\;)/g, '$1Πως$2')
		.replace(/(\n| |\,|\.|\!|\;)σάς(\n| |\,|\.|\!|\;)/g, '$1σας$2')
		.replace(/(\n| |\,|\.|\!|\;)Σάς(\n| |\,|\.|\!|\;)/g, '$1Σας$2')
		.replace(/(\n| |\,|\.|\!|\;)σάν(\n| |\,|\.|\!|\;)/g, '$1σαν$2')
		.replace(/(\n| |\,|\.|\!|\;)Σάν(\n| |\,|\.|\!|\;)/g, '$1Σαν$2')
		.replace(/(\n| |\,|\.|\!|\;)σού(\n| |\,|\.|\!|\;)/g, '$1σου$2')
		.replace(/(\n| |\,|\.|\!|\;)Σού(\n| |\,|\.|\!|\;)/g, '$1Σου$2')
		.replace(/(\n| |\,|\.|\!|\;)στά(\n| |\,|\.|\!|\;)/g, '$1στα$2')
		.replace(/(\n| |\,|\.|\!|\;)Στά(\n| |\,|\.|\!|\;)/g, '$1Στα$2')
		.replace(/(\n| |\,|\.|\!|\;)στή(\n| |\,|\.|\!|\;)/g, '$1στη$2')
		.replace(/(\n| |\,|\.|\!|\;)Στή(\n| |\,|\.|\!|\;)/g, '$1Στη$2')
		.replace(/(\n| |\,|\.|\!|\;)στό(\n| |\,|\.|\!|\;)/g, '$1στο$2')
		.replace(/(\n| |\,|\.|\!|\;)Στό(\n| |\,|\.|\!|\;)/g, '$1Στο$2')
		.replace(/(\n| |\,|\.|\!|\;)τήν(\n| |\,|\.|\!|\;)/g, '$1την$2')
		.replace(/(\n| |\,|\.|\!|\;)Τήν(\n| |\,|\.|\!|\;)/g, '$1Την$2')
		.replace(/(\n| |\,|\.|\!|\;)τής(\n| |\,|\.|\!|\;)/g, '$1της$2')
		.replace(/(\n| |\,|\.|\!|\;)Τής(\n| |\,|\.|\!|\;)/g, '$1Της$2')
		.replace(/(\n| |\,|\.|\!|\;)τίς(\n| |\,|\.|\!|\;)/g, '$1τις$2')
		.replace(/(\n| |\,|\.|\!|\;)Τίς(\n| |\,|\.|\!|\;)/g, '$1Τις$2')
		.replace(/(\n| |\,|\.|\!|\;)τόν(\n| |\,|\.|\!|\;)/g, '$1τον$2')
		.replace(/(\n| |\,|\.|\!|\;)Τόν(\n| |\,|\.|\!|\;)/g, '$1Τον$2')
		.replace(/(\n| |\,|\.|\!|\;)τού(\n| |\,|\.|\!|\;)/g, '$1του$2')
		.replace(/(\n| |\,|\.|\!|\;)Τού(\n| |\,|\.|\!|\;)/g, '$1Του$2')
		.replace(/(\n| |\,|\.|\!|\;)τών(\n| |\,|\.|\!|\;)/g, '$1των$2')
		.replace(/(\n| |\,|\.|\!|\;)Τών(\n| |\,|\.|\!|\;)/g, '$1Των$2')
		.replace(/(\n| |\,|\.|\!|\;)φώς(\n| |\,|\.|\!|\;)/g, '$1φως$2')
		.replace(/(\n| |\,|\.|\!|\;)Φώς(\n| |\,|\.|\!|\;)/g, '$1Φως$2');
		
		


		// 4-grams
		doc_str = doc_str
		.replace(/(\n| |\,|\.|\!|\;)βρές(\n| |\,|\.|\!|\;)/g, '$1βρες$2')
		.replace(/(\n| |\,|\.|\!|\;)Βρές(\n| |\,|\.|\!|\;)/g, '$1Βρες$2')
		.replace(/(\n| |\,|\.|\!|\;)βγεί(\n| |\,|\.|\!|\;)/g, '$1βγει$2')
		.replace(/(\n| |\,|\.|\!|\;)Βγεί(\n| |\,|\.|\!|\;)/g, '$1Βγει$2')
		.replace(/(\n| |\,|\.|\!|\;)δείς(\n| |\,|\.|\!|\;)/g, '$1δεις$2')
		.replace(/(\n| |\,|\.|\!|\;)Δείς(\n| |\,|\.|\!|\;)/g, '$1Δεις$2')
		.replace(/(\n| |\,|\.|\!|\;)ζείς(\n| |\,|\.|\!|\;)/g, '$1ζεις$2')
		.replace(/(\n| |\,|\.|\!|\;)Ζείς(\n| |\,|\.|\!|\;)/g, '$1Ζεις$2')
		.replace(/(\n| |\,|\.|\!|\;)μιάν(\n| |\,|\.|\!|\;)/g, '$1μιαν$2')
		.replace(/(\n| |\,|\.|\!|\;)Μιάν(\n| |\,|\.|\!|\;)/g, '$1Μιαν$2')
		.replace(/(\n| |\,|\.|\!|\;)μιάς(\n| |\,|\.|\!|\;)/g, '$1μιας$2')
		.replace(/(\n| |\,|\.|\!|\;)Μιάς(\n| |\,|\.|\!|\;)/g, '$1Μιας$2')
		.replace(/(\n| |\,|\.|\!|\;)νούς(\n| |\,|\.|\!|\;)/g, '$1νους$2')
		.replace(/(\n| |\,|\.|\!|\;)Νούς(\n| |\,|\.|\!|\;)/g, '$1Νους$2')
		.replace(/(\n| |\,|\.|\!|\;)πείς(\n| |\,|\.|\!|\;)/g, '$1πεις$2')
		.replace(/(\n| |\,|\.|\!|\;)Πείς(\n| |\,|\.|\!|\;)/g, '$1Πεις$2')
		.replace(/(\n| |\,|\.|\!|\;)ποιό(\n| |\,|\.|\!|\;)/g, '$1ποιο$2')
		.replace(/(\n| |\,|\.|\!|\;)Ποιό(\n| |\,|\.|\!|\;)/g, '$1Ποιο$2')
		.replace(/(\n| |\,|\.|\!|\;)πρίν(\n| |\,|\.|\!|\;)/g, '$1πριν$2')
		.replace(/(\n| |\,|\.|\!|\;)Πρίν(\n| |\,|\.|\!|\;)/g, '$1Πριν$2')
		.replace(/(\n| |\,|\.|\!|\;)πρός(\n| |\,|\.|\!|\;)/g, '$1προς$2')
		.replace(/(\n| |\,|\.|\!|\;)Πρός(\n| |\,|\.|\!|\;)/g, '$1Προς$2')
		.replace(/(\n| |\,|\.|\!|\;)στήν(\n| |\,|\.|\!|\;)/g, '$1στην$2')
		.replace(/(\n| |\,|\.|\!|\;)Στήν(\n| |\,|\.|\!|\;)/g, '$1Στην$2')
		.replace(/(\n| |\,|\.|\!|\;)στής(\n| |\,|\.|\!|\;)/g, '$1στης$2')
		.replace(/(\n| |\,|\.|\!|\;)Στής(\n| |\,|\.|\!|\;)/g, '$1Στης$2')
		.replace(/(\n| |\,|\.|\!|\;)στίς(\n| |\,|\.|\!|\;)/g, '$1στις$2')
		.replace(/(\n| |\,|\.|\!|\;)Στίς(\n| |\,|\.|\!|\;)/g, '$1Στις$2')
		.replace(/(\n| |\,|\.|\!|\;)στόν(\n| |\,|\.|\!|\;)/g, '$1στον$2')
		.replace(/(\n| |\,|\.|\!|\;)Στόν(\n| |\,|\.|\!|\;)/g, '$1Στον$2')
		.replace(/(\n| |\,|\.|\!|\;)στού(\n| |\,|\.|\!|\;)/g, '$1στου$2')
		.replace(/(\n| |\,|\.|\!|\;)Στού(\n| |\,|\.|\!|\;)/g, '$1Στου$2')
		.replace(/(\n| |\,|\.|\!|\;)τούς(\n| |\,|\.|\!|\;)/g, '$1τους$2')
		.replace(/(\n| |\,|\.|\!|\;)Τούς(\n| |\,|\.|\!|\;)/g, '$1Τους$2');



		// 5-grams
		doc_str = doc_str
		.replace(/(\n| |\,|\.|\!|\;)βγείς(\n| |\,|\.|\!|\;)/g, '$1βγεις$2')
		.replace(/(\n| |\,|\.|\!|\;)Βγείς(\n| |\,|\.|\!|\;)/g, '$1Βγεις$2')
		.replace(/(\n| |\,|\.|\!|\;)βρείς(\n| |\,|\.|\!|\;)/g, '$1βρεις$2')
		.replace(/(\n| |\,|\.|\!|\;)Βρείς(\n| |\,|\.|\!|\;)/g, '$1Βρεις$2')
		.replace(/(\n| |\,|\.|\!|\;)μπρός(\n| |\,|\.|\!|\;)/g, '$1μπρος$2')
		.replace(/(\n| |\,|\.|\!|\;)Μπρός(\n| |\,|\.|\!|\;)/g, '$1Μπρος$2')
		.replace(/(\n| |\,|\.|\!|\;)ποιόν(\n| |\,|\.|\!|\;)/g, '$1ποιον$2')
		.replace(/(\n| |\,|\.|\!|\;)Ποιόν(\n| |\,|\.|\!|\;)/g, '$1Ποιον$2')
		.replace(/(\n| |\,|\.|\!|\;)ποιός(\n| |\,|\.|\!|\;)/g, '$1ποιος$2')
		.replace(/(\n| |\,|\.|\!|\;)Ποιός(\n| |\,|\.|\!|\;)/g, '$1Ποιος$2')
		.replace(/(\n| |\,|\.|\!|\;)στούς(\n| |\,|\.|\!|\;)/g, '$1στους$2')
		.replace(/(\n| |\,|\.|\!|\;)Στούς(\n| |\,|\.|\!|\;)/g, '$1Στους$2');
				
		
		cm.getDoc().setValue(doc_str);

	});




	$(".btn-fix-single-quotes").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		// doc_str = doc_str.replace(/\᾿|\’|\‘|\᾽/g, '\'');
		doc_str = doc_str.replace(/\'|\‘|\᾽|΄|ʼ|ʽ/g, '\’');
		cm.getDoc().setValue(doc_str);

	});




	$(".btn-fix-math-symbols").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().replace(/µ/g, 'μ').replace(/∆/g, 'Δ'));
	});



	$(".btn-fix-psili").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/᾿/g, '\’');
		cm.getDoc().setValue(doc_str);

	});



	$(".btn-fix-ano-teleia").on('click',function(event){
		// replaces:
		//   - Middle Dot U+00B7
		//   - Dot Above  U+02D9
		// with Greek Ano Teleia U+0387
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/·|˙/g, '·');
		cm.getDoc().setValue(doc_str);

	});



	$(".btn-fix-latin-greek").on('click',function(event){
		// replaces:
		// ABEHIKMNOPTXYZ opvxz (Latin) with
		// ΑΒΕΗΙΚΜΝΟΡΤΧΥΖ ορνχζ (Greek)
		event.preventDefault();
		doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/A/g, 'Α').replace(/B/g, 'Β').replace(/E/g, 'Ε').replace(/H/g, 'Η').replace(/I/g, 'Ι').replace(/K/g, 'Κ').replace(/M/g, 'Μ')
		                 .replace(/N/g, 'Ν').replace(/O/g, 'Ο').replace(/P/g, 'Ρ').replace(/T/g, 'Τ').replace(/X/g, 'Χ').replace(/Y/g, 'Υ').replace(/Z/g, 'Ζ')
		                 .replace(/o/g, 'ο').replace(/p/g, 'ρ').replace(/v/g, 'ν').replace(/x/g, 'χ').replace(/z/g, 'ζ');
		cm.getDoc().setValue(doc_str);
	});



	$(".btn-fix-diacritics").on('click',function(event){
		event.preventDefault();
		doc_str = cm.getDoc().getValue();


		// fix [diacritic]+[character] to one single character
		// ===================================================

		// Case:
		// (᾽) Greek Koronis, U+1FBD OR (᾿) Greek Psili: U+1FBF
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
						                       //     Greek Capital Letter Upsilon with Psili and Perispomeni does not exist
						 .replace(/῏Ω/g, 'Ὦ')  // (Ὦ) Greek Capital Letter Omega with Psili and Perispomeni: U+1F6E

		// Case:
		// (῾) Greek Dasia: U+1FFE
						 .replace(/῾Α/g, 'Ἁ')  // (Ἁ) Greek Capital Letter Alpha with Dasia: U+1F09
						 .replace(/῾Ε/g, 'Ἑ')  // (Ἑ) Greek Capital Letter Epsilon with Dasia: U+1F19
						 .replace(/῾Η/g, 'Ἡ')  // (Ἡ) Greek Capital Letter Eta with Dasia: U+1F29
						 .replace(/῾Ι/g, 'Ἱ')  // (Ἱ) Greek Capital Letter Iota with Dasia: U+1F39
						 .replace(/῾Ο/g, 'Ὁ')  // (Ὁ) Greek Capital Letter Omicron with Dasia: U+1F49
						 .replace(/῾Υ/g, 'Ὑ')  // (Ὑ) Greek Capital Letter Upsilon with Dasia: U+1F59
						 .replace(/῾Ω/g, 'Ὡ')  // (Ὡ) Greek Capital Letter Omega with Dasia: U+1F69

	 	// Case:
		// (῝) Greek Dasia and Varia: U+1FDD
						 .replace(/῝Α/g, 'Ἃ')  // (Ἃ) Greek Capital Letter Alpha with Dasia and Varia: U+1F0B
						 .replace(/῝Ε/g, 'Ἓ')  // (Ἓ) Greek Capital Letter Epsilon with Dasia and Varia: U+1F1B
						 .replace(/῝Η/g, 'Ἣ')  // (Ἣ) Greek Capital Letter Eta with Dasia and Varia: U+1F2B
						 .replace(/῝Ι/g, 'Ἳ')  // (Ἳ) Greek Capital Letter Iota with Dasia and Varia: U+1F3B
						 .replace(/῝Ο/g, 'Ὃ')  // (Ὃ) Greek Capital Letter Omicron with Dasia and Varia: U+1F4B
						 .replace(/῝Υ/g, 'Ὓ')  // (Ὓ) Greek Capital Letter Upsilon with Dasia and Varia: U+1F5B
						 .replace(/῝Ω/g, 'Ὣ')  // (Ὣ) Greek Capital Letter Omega with Dasia and Varia: U+1F6B
		
		// Case:
		// (῞) Greek Dasia and Oxia: U+1FDE
						 .replace(/῞Α/g, 'Ἅ')  // (Ἅ) Greek Capital Letter Alpha with Dasia and Oxia: U+1F0D
						 .replace(/῞Ε/g, 'Ἕ')  // (Ἕ) Greek Capital Letter Epsilon with Dasia and Oxia: U+1F1D
						 .replace(/῞Η/g, 'Ἥ')  // (Ἥ) Greek Capital Letter Eta with Dasia and Oxia: U+1F2D
						 .replace(/῞Ι/g, 'Ἵ')  // (Ἵ) Greek Capital Letter Iota with Dasia and Oxia: U+1F3D
						 .replace(/῞Ο/g, 'Ὅ')  // (Ὅ) Greek Capital Letter Omicron with Dasia and Oxia: U+1F4D
						 .replace(/῞Υ/g, 'Ὕ')  // (Ὕ) Greek Capital Letter Upsilon with Dasia and Oxia: U+1F5D
						 .replace(/῞Ω/g, 'Ὥ')  // (Ὥ) Greek Capital Letter Omega with Dasia and Oxia: U+1F6D

		// Case:
		// (῟) Greek Dasia and Perispomeni: U+1FDF
						 .replace(/῟Α/g, 'Ἇ')  // (Ἇ) Greek Capital Letter Alpha with Dasia and Perispomeni: U+1F0F
											   //     Greek Capital Letter Epsilon with Dasia and Perispomeni does not exist
						 .replace(/῟Η/g, 'Ἧ')  // (Ἧ) Greek Capital Letter Eta with Dasia and Perispomeni: U+1F2F
						 .replace(/῟Ι/g, 'Ἷ')  // (Ἷ) Greek Capital Letter Iota with Dasia and Perispomeni: U+1F3F
											   //     Greek Capital Letter Omicron with Dasia and Perispomeni does not exist
						 .replace(/῟Υ/g, 'Ὗ')  // (Ὗ) Greek Capital Letter Upsilon with Dasia and Perispomeni: U+1F5F
						 .replace(/῟Ω/g, 'Ὧ')  // (Ὧ) Greek Capital Letter Omega with Dasia and Perispomeni: U+1F6F

		// // Case:
		// // (X) Greek ... and ...: U+...
		// 				 .replace(/XΑ/g, '')  //
		// 				 .replace(/XΕ/g, '')  //
		// 				 .replace(/XΗ/g, '')  //
		// 				 .replace(/XΙ/g, '')  //
		// 				 .replace(/XΟ/g, '')  //
		// 				 .replace(/XΥ/g, '')  //
		// 				 .replace(/XΩ/g, '')  //

		cm.getDoc().setValue(doc_str);

	});




	$(".btn-fix-spaces").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().replace(/( )+/g, ' '));
	});




	// 
	// Normalization Form D (NFD): Canonical Decomposition
	// 
	$(".btn-norm-NFD").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().normalize('NFD'));
	});

	// 
	// Normalization Form C (NFC): Canonical Decomposition, followed by Canonical Composition
	// 
	$(".btn-norm-NFC").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().normalize('NFC'));
	});

	// 
	// Normalization Form KD (NFKD): Compatibility Decomposition
	// 
	$(".btn-norm-NFKD").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().normalize('NFKD'));
	});

	//
	// Normalization Form KC (NFKC): Compatibility Decomposition, followed by Canonical Composition
	//
	$(".btn-norm-NFKC").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().normalize('NFKC'));
	});

	//
	// Normalize (remove) greek accents
	//
	$(".btn-norm-GR").on('click',function(event){
		event.preventDefault();
		cm.getDoc().setValue(cm.getDoc().getValue().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
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
			// mark_greek_extended_text();
			mark(char_list_greek_extended, char_class_gr_ext)
		} else {
			clear_greek_extended_markers();
		}
	});




	//
	// listeners for inc/decrease the font size
	//
	$(".btn-font-inc").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".CodeMirror").css("font-size",++font_size);
		cm.refresh();
	});
	$(".btn-font-dec").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".CodeMirror").css("font-size",--font_size);
		cm.refresh();
	});
	$(".btn-font-rst").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		font_size = 14;
		$(".CodeMirror").css("font-size",font_size);
		cm.refresh();
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
		event.preventDefault();
		event.stopPropagation();
		mark_greek_coptic = this.checked;
		if (mark_greek_coptic) {
			//mark_greek_coptic_text();
			mark(char_list_greek_coptic,char_class_gr_coptic);
		} else {
			clear_greek_coptic_markers();
		}

	});

	// mark numbers

	$(".btn-mark-num").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".btn-mark-num input").trigger('click');

	});
	$(".btn-mark-num input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-mark-num input").change( function(event){
		event.preventDefault();
		event.stopPropagation();
		mark_numbers = this.checked;
		if (mark_numbers) {
			// mark_numbers_text();
			mark(char_list_numbers, char_class_numbers);
		} else {
			clear_number_markers();
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
			// mark_latin_text_red();
			mark(char_list_latin, char_class_latin);
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
			// mark_punctuation_text();
			mark(char_list_punctuation, char_class_punctuation);
		} else {
			clear_punctuation_markers();
		}

	});




	// toggle word wrap

	$(".btn-toggle-wrap").on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		$(".btn-toggle-wrap input").trigger('click');

	});
	$(".btn-toggle-wrap input").on('click',function(event){
		event.stopPropagation();
	});
	$(".btn-toggle-wrap input").change( function(event){
		event.stopPropagation();
		word_wrap = this.checked;
		cm.setOption("lineWrapping", word_wrap);
	});
});



// .match(/[\u0370-\u03FF]|[0-9]| |\n|\(|\)|\-|\,|'|\./g)


function clear_greek_extended_markers() {
	greek_extended_markers.forEach(marker => marker.clear());
}

function clear_greek_coptic_markers() {
	greek_coptic_markers.forEach(marker => marker.clear());
}

function clear_number_markers() {
	number_markers.forEach(marker => marker.clear());
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



// deprecated, to be deleted
function mark_greek_extended_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {
			
			if (lines[i][j].match(/[\u1F00-\u1FFF]/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					greek_extended_markers.push(cm.markText(from,to,{className: "gr-ext"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				greek_extended_markers.push(cm.markText(from,to,{className: "gr-ext"}));
				matched_char_positions = [];
			}
		}
	}
}




// deprecated, to be removed
function mark_greek_coptic_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {
			
			if (lines[i][j].match(/[\u0370-\u03FF]/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					greek_coptic_markers.push(cm.markText(from,to,{className: "gr-coptic"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				greek_coptic_markers.push(cm.markText(from,to,{className: "gr-coptic"}));
				matched_char_positions = [];
			}
		}
	}
}



// deprecated, to be removed
function mark_numbers_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {

			if (lines[i][j].match(/[\u0028-\u002b]|[\u002f-\u0039]/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					number_markers.push(cm.markText(from,to,{className: "num"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				number_markers.push(cm.markText(from,to,{className: "num"}));
				matched_char_positions = [];
			}
		}
	}
}



// deprecated, to be removed
function mark_latin_text_red() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {
			
			if (lines[i][j].match(/[\u003C-\u007F]/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					latin_red_markers.push(cm.markText(from,to,{className: "latin-red"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				latin_red_markers.push(cm.markText(from,to,{className: "latin-red"}));
				matched_char_positions = [];
			}
		}
	}
}






function mark_unwanted_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {

			// BASIC LATIN
			// " : U+0022 Quotation Mark
			// ' : U+0027 APOSTROPHE {APL quote}
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
			
			if (lines[i][j].match(/\"|\'|\/|µ|∆|·|˙|΄|᾽|ι|᾿|῀|῁|῍|῎|῏|῝|῞|῟|῭|΅|`|´|῾|\‘|“|”|ʼ|ʽ/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					unwanted_markers.push(cm.markText(from,to,{className: "unwanted"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				unwanted_markers.push(cm.markText(from,to,{className: "unwanted"}));
				matched_char_positions = [];
			}
		}
	}
}



// deprecated, to be deleted
function mark_punctuation_text() {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {

			// CONTROL CHARACTERS
			// \t : U+0009 Horizontal Tabulation
			
			if (lines[i][j].match(/\t|\.|\,|\’| |…|:|;|;|!|«|»|-/g) != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					punctuation_markers.push(cm.markText(from,to,{className: "punctuation"}));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				punctuation_markers.push(cm.markText(from,to,{className: "punctuation"}));
				matched_char_positions = [];
			}
		}
	}
}

// function that scans the whole text and adds color when needed.
// character_list must be a string,
// valid regex, in order to be used with javascript function: RegExp()
// 
function mark(character_list, css_class_name) {
	doc_str = cm.getDoc().getValue();
	var lines = doc_str.split('\n');
	var from = {line:0,ch:0};
	var to   = {line:0,ch:0};
	var matched_char_positions = [];

	var regex = new RegExp(character_list);
	var css_class_obj = {className: css_class_name};

	for (var i=0; i<lines.length; i++) {
		from.line = i;
		from.ch   = 0;
		to.line   = i;
		to.ch     = 0;
		matched_char_positions = [];


		for (var j=0; j<lines[i].length; j++) {
			
			if (lines[i][j].match(regex, 'g') != null) {

				matched_char_positions.push(j);

			} else {
				if (matched_char_positions.length == 0) {
					continue;
				} else {
					from.ch = matched_char_positions[0];
					to.ch   = matched_char_positions[0] + matched_char_positions.length;
					punctuation_markers.push(cm.markText(from,to,css_class_obj));
					matched_char_positions = [];
				}
			}

			if (j==lines[i].length-1) {
				from.ch = matched_char_positions[0];
				to.ch   = matched_char_positions[0] + matched_char_positions.length;
				punctuation_markers.push(cm.markText(from,to,css_class_obj));
				matched_char_positions = [];
			}
		}
	}
}