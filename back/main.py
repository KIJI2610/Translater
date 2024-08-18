from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from trans import transText
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешить все источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
)
# Приверка работоспособности
@app.get('/')
def home():
    return 'server run'

# Роут для перевода входящих сообщений
@app.post('/data')
async def data(request: Request):
    data = await request.body()
    data_json = json.loads(data.decode('utf-8'))
    data_str = data_json['data']
    data_lang = data_json['lang']
    print(data_str)
    response_text = transText(data_str, data_lang)
    return Response(content=response_text, media_type="text/plain")