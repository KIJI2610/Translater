from googletrans import Translator

translator = Translator()

def transText(text, language):
    translated = translator.translate(text, dest=language)
    return translated.text