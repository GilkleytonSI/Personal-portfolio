function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'pt', includedLanguages: 'en,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
    );
}

// funcionalidade ao seletor de idiomas
document.getElementById("language-switcher").addEventListener("change", function () {
    let language = this.value;
    let googleTranslateSelect = document.querySelector(".goog-te-combo");
    
    if (googleTranslateSelect) {
        googleTranslateSelect.value = language;
        googleTranslateSelect.dispatchEvent(new Event("change"));
    }
});
