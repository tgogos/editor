var cm = null; // codemirror

$(document).ready(function(){

	cm = CodeMirror(document.body,{
		theme:"monokai",
		lineNumbers: true
	});

	cm.setSize("100%", "100%");
	cm.getDoc().setValue(
`Άλφα
ἀ ἁ ἂ ἃ ἄ ἅ ἆ ἇ ὰ ά ᾀ ᾁ ᾂ ᾃ ᾄ ᾅ ᾆ ᾇ ᾰ ᾱ ᾲ ᾳ ᾴ ᾶ ᾷ Ἀ Ἁ Ἂ Ἃ Ἄ Ἅ Ἆ Ἇ ᾈ ᾉ ᾊ ᾋ ᾌ ᾍ ᾎ ᾏ Ᾰ Ᾱ Ὰ Ά ᾼ
Έψιλον
ἐ ἑ ἒ ἓ ἔ ἕ ὲ έ Ἐ Ἑ Ἒ Ἓ Ἔ Ἕ Ὲ Έ
Ήττα
ἠ ἡ ἢ ἣ ἤ ἥ ἦ ἧ ὴ ή ᾐ ᾑ ᾒ ᾓ ᾔ ᾕ ᾖ ᾗ ῂ ῃ ῄ ῆ ῇ Ἠ Ἡ Ἢ Ἣ Ἤ Ἥ Ἦ Ἧ ᾘ ᾙ ᾚ ᾛ ᾜ ᾝ ᾞ ᾟ Ὴ Ή ῌ
Ιώτα
ἰ ἱ ἲ ἳ ἴ ἵ ἶ ἷ ὶ ί ῐ ῑ ῒ ΐ ῖ ῗ Ἰ Ἱ Ἲ Ἳ Ἴ Ἵ Ἶ Ἷ Ῐ Ῑ Ὶ Ί
Ιώτα
ὀ ὁ ὂ ὃ ὄ ὅ ὸ ό Ὀ Ὁ Ὂ Ὃ Ὄ Ὅ Ὸ Ό
Ύψιλον
ὐ ὑ ὒ ὓ ὔ ὕ ὖ ὗ ὺ ύ ῠ ῡ ῢ ΰ ῦ ῧ Ὑ Ὓ Ὕ Ὗ Ῠ Ῡ Ὺ Ύ
Ωμέγα
ὠ ὡ ὢ ὣ ὤ ὥ ὦ ὧ ὼ ώ ᾠ ᾡ ᾢ ᾣ ᾤ ᾥ ᾦ ᾧ ῲ ῳ ῴ ῶ ῷ Ὠ Ὡ Ὢ Ὣ Ὤ Ὥ Ὦ Ὧ ᾨ ᾩ ᾪ ᾫ ᾬ ᾭ ᾮ ᾯ Ὼ Ώ ῼ`
);

	// add button listeners
	$(".btn-rm-cap-daseia-psili").on('click',function(event){
		var doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/Ἀ|Ἁ|ᾈ|ᾉ/g, "Α");
		doc_str = doc_str.replace(/Ἐ|Ἑ/g,     "Ε");
		doc_str = doc_str.replace(/Ἠ|Ἡ|ᾘ|ᾙ/g, "Η");
		doc_str = doc_str.replace(/Ἰ|Ἱ/g,     "Ι");
		doc_str = doc_str.replace(/Ὀ|Ὁ/g,     "Ο");
		doc_str = doc_str.replace(/Ὑ/g,       "Υ"); // ypsilon can't take psili
		doc_str = doc_str.replace(/Ὠ|Ὡ|ᾨ|ᾩ/g, "Ω");
		cm.getDoc().setValue(doc_str);

	});

	$(".btn-rp-cap-daseia-psili-tonos").on('click',function(event){
		var doc_str = cm.getDoc().getValue();
		doc_str = doc_str.replace(/Ἂ|Ἃ|Ἄ|Ἅ|Ἆ|Ἇ|ᾊ|ᾋ|ᾌ|ᾍ|ᾎ|ᾏ|Ὰ|Ά/g, "Ά");
		doc_str = doc_str.replace(/Ἒ|Ἓ|Ἔ|Ἕ|Ὲ|Έ/g,                 "Έ");
		doc_str = doc_str.replace(/Ἢ|Ἣ|Ἤ|Ἥ|Ἦ|Ἧ|ᾚ|ᾛ|ᾜ|ᾝ|ᾞ|ᾟ|Ὴ|Ή/g, "Ή");
		doc_str = doc_str.replace(/Ἲ|Ἳ|Ἴ|Ἵ|Ἶ|Ἷ|Ὶ|Ί/g,             "Ί");
		doc_str = doc_str.replace(/Ὂ|Ὃ|Ὄ|Ὅ|Ὸ|Ό/g,                 "Ό");
		doc_str = doc_str.replace(/Ὓ|Ὕ|Ὗ|Ὺ|Ύ/g,                   "Ύ");
		doc_str = doc_str.replace(/Ὢ|Ὣ|Ὤ|Ὥ|Ὦ|Ὧ|ᾪ|ᾫ|ᾬ|ᾭ|ᾮ|ᾯ|Ὼ|Ώ/g, "Ώ");
		cm.getDoc().setValue(doc_str);

	});

	
});