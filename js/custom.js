var cm = null; // codemirror
var doc_str = null;

$(document).ready(function(){

	cm = CodeMirror(document.body,{
		theme:"monokai",
		lineNumbers: true
	});

	cm.setSize("100%", "100%");
	cm.getDoc().setValue(
`
`
);

	// add button listeners
	$(".btn-rp-daseia-psili").on('click',function(event){
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
		doc_str = cm.getDoc().getValue();


		// 2-grams
		doc_str = doc_str.replace(/(\n| |\,)άς(\n| |\,)/g, '$1ας$2');
		doc_str = doc_str.replace(/(\n| |\,)Άς(\n| |\,)/g, '$1Ας$2');
		doc_str = doc_str.replace(/(\n| |\,)θά(\n| |\,)/g, '$1θα$2');
		doc_str = doc_str.replace(/(\n| |\,)Θά(\n| |\,)/g, '$1Θα$2');
		doc_str = doc_str.replace(/(\n| |\,)θέ(\n| |\,)/g, '$1θε$2');
		doc_str = doc_str.replace(/(\n| |\,)Θέ(\n| |\,)/g, '$1Θε$2');
		doc_str = doc_str.replace(/(\n| |\,)μέ(\n| |\,)/g, '$1με$2');
		doc_str = doc_str.replace(/(\n| |\,)Μέ(\n| |\,)/g, '$1Με$2');
		doc_str = doc_str.replace(/(\n| |\,)νά(\n| |\,)/g, '$1να$2');
		doc_str = doc_str.replace(/(\n| |\,)Νά(\n| |\,)/g, '$1Να$2');
		doc_str = doc_str.replace(/(\n| |\,)σέ(\n| |\,)/g, '$1σε$2');
		doc_str = doc_str.replace(/(\n| |\,)Σέ(\n| |\,)/g, '$1Σε$2');
		doc_str = doc_str.replace(/(\n| |\,)σύ(\n| |\,)/g, '$1συ$2');
		doc_str = doc_str.replace(/(\n| |\,)Σύ(\n| |\,)/g, '$1Συ$2');
		doc_str = doc_str.replace(/(\n| |\,)τά(\n| |\,)/g, '$1τα$2');
		doc_str = doc_str.replace(/(\n| |\,)Τά(\n| |\,)/g, '$1Τα$2');
		doc_str = doc_str.replace(/(\n| |\,)τή(\n| |\,)/g, '$1τη$2');
		doc_str = doc_str.replace(/(\n| |\,)Τή(\n| |\,)/g, '$1Τη$2');
		doc_str = doc_str.replace(/(\n| |\,)τό(\n| |\,)/g, '$1το$2');
		doc_str = doc_str.replace(/(\n| |\,)Τό(\n| |\,)/g, '$1Το$2');
		doc_str = doc_str.replace(/(\n| |\,)ώς(\n| |\,)/g, '$1ως$2');
		doc_str = doc_str.replace(/(\n| |\,)Ώς(\n| |\,)/g, '$1Ως$2');



		// 3-grams
		doc_str = doc_str.replace(/(\n| |\,)γιά(\n| |\,)/g, '$1για$2');
		doc_str = doc_str.replace(/(\n| |\,)Γιά(\n| |\,)/g, '$1Για$2');
		doc_str = doc_str.replace(/(\n| |\,)καί(\n| |\,)/g, '$1και$2');
		doc_str = doc_str.replace(/(\n| |\,)Καί(\n| |\,)/g, '$1Και$2');
		doc_str = doc_str.replace(/(\n| |\,)μάς(\n| |\,)/g, '$1μας$2');
		doc_str = doc_str.replace(/(\n| |\,)Μάς(\n| |\,)/g, '$1Μας$2');
		doc_str = doc_str.replace(/(\n| |\,)μές(\n| |\,)/g, '$1μες$2');
		doc_str = doc_str.replace(/(\n| |\,)Μές(\n| |\,)/g, '$1Μες$2');
		doc_str = doc_str.replace(/(\n| |\,)μιά(\n| |\,)/g, '$1μια$2');
		doc_str = doc_str.replace(/(\n| |\,)Μιά(\n| |\,)/g, '$1Μια$2');
		doc_str = doc_str.replace(/(\n| |\,)μού(\n| |\,)/g, '$1μου$2');
		doc_str = doc_str.replace(/(\n| |\,)Μού(\n| |\,)/g, '$1Μου$2');
		doc_str = doc_str.replace(/(\n| |\,)νού(\n| |\,)/g, '$1νου$2');
		doc_str = doc_str.replace(/(\n| |\,)πού(\n| |\,)/g, '$1που$2');
		doc_str = doc_str.replace(/(\n| |\,)Πού(\n| |\,)/g, '$1Που$2');
		doc_str = doc_str.replace(/(\n| |\,)σάς(\n| |\,)/g, '$1σας$2');
		doc_str = doc_str.replace(/(\n| |\,)Σάς(\n| |\,)/g, '$1Σας$2');
		doc_str = doc_str.replace(/(\n| |\,)σάν(\n| |\,)/g, '$1σαν$2');
		doc_str = doc_str.replace(/(\n| |\,)Σάν(\n| |\,)/g, '$1Σαν$2');
		doc_str = doc_str.replace(/(\n| |\,)στά(\n| |\,)/g, '$1στα$2');
		doc_str = doc_str.replace(/(\n| |\,)Στά(\n| |\,)/g, '$1Στα$2');
		doc_str = doc_str.replace(/(\n| |\,)στή(\n| |\,)/g, '$1στη$2');
		doc_str = doc_str.replace(/(\n| |\,)Στή(\n| |\,)/g, '$1Στη$2');
		doc_str = doc_str.replace(/(\n| |\,)στό(\n| |\,)/g, '$1στο$2');
		doc_str = doc_str.replace(/(\n| |\,)Στό(\n| |\,)/g, '$1Στο$2');
		doc_str = doc_str.replace(/(\n| |\,)τήν(\n| |\,)/g, '$1την$2');
		doc_str = doc_str.replace(/(\n| |\,)Τήν(\n| |\,)/g, '$1Την$2');
		doc_str = doc_str.replace(/(\n| |\,)τίς(\n| |\,)/g, '$1τις$2');
		doc_str = doc_str.replace(/(\n| |\,)Τίς(\n| |\,)/g, '$1Τις$2');
		doc_str = doc_str.replace(/(\n| |\,)τόν(\n| |\,)/g, '$1τον$2');
		doc_str = doc_str.replace(/(\n| |\,)Τόν(\n| |\,)/g, '$1Τον$2');
		doc_str = doc_str.replace(/(\n| |\,)τού(\n| |\,)/g, '$1του$2');
		doc_str = doc_str.replace(/(\n| |\,)Τού(\n| |\,)/g, '$1Του$2');
		doc_str = doc_str.replace(/(\n| |\,)φώς(\n| |\,)/g, '$1φως$2');
		doc_str = doc_str.replace(/(\n| |\,)Φώς(\n| |\,)/g, '$1Φως$2');
		
		


		// 4-grams
		doc_str = doc_str.replace(/(\n| |\,)στήν(\n| |\,)/g, '$1στην$2');
		doc_str = doc_str.replace(/(\n| |\,)Στήν(\n| |\,)/g, '$1Στην$2');
		doc_str = doc_str.replace(/(\n| |\,)στής(\n| |\,)/g, '$1στης$2');
		doc_str = doc_str.replace(/(\n| |\,)Στής(\n| |\,)/g, '$1Στης$2');
		doc_str = doc_str.replace(/(\n| |\,)στόν(\n| |\,)/g, '$1στον$2');
		doc_str = doc_str.replace(/(\n| |\,)Στόν(\n| |\,)/g, '$1Στον$2');
		doc_str = doc_str.replace(/(\n| |\,)στού(\n| |\,)/g, '$1στου$2');
		doc_str = doc_str.replace(/(\n| |\,)Στού(\n| |\,)/g, '$1Στου$2');
		
				
		
		cm.getDoc().setValue(doc_str);

	});
	
});

//      μού στά σάν τό άς στόν γιά 

// .match(/[\u0370-\u03FF]|[0-9]| |\n|\(|\)|\-|\,|'|\./g)