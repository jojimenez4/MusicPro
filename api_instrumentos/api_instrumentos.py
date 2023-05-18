from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

productos = [
    {
        "nombre_producto": "Guitarra acústica Ibanez GA3",
        "marca": "Ibanez",
        "precio": 169899,
        "img": "img/guitar0.png"
    },
    {
        "nombre_producto": "Guitarra acústica Vizcaya ARFG94",
        "marca": "Vizcaya",
        "precio": 69990,
        "img": "img/guitar1.png"
    },
    {
        "nombre_producto": "Guitarra acústica Vizcaya ARCG44",
        "marca": "Vizcaya",
        "precio": 64990,
        "img": "img/guitar2.png"
    },
    {
        "nombre_producto": "Guitarra acústica clásica Raimundo 118 Nylon",
        "marca": "Raimundo",
        "precio": 599900,
        "img": "img/guitar3.png"
    },
    {
        "nombre_producto": "Guitarra clásica Takamine GC1",
        "marca": "Takamine",
        "precio": 259900,
        "img": "img/guitar4.png"
    },
    {
        "nombre_producto": "Guitarra eléctrica Gibson Les Paul Classic",
        "marca": "Gibson",
        "precio": 2999900,
        "img": "img/guitar5.png"
    },
    {
        "nombre_producto": "Guitarra eléctrica Gibson Les Paul Custom Reissue",
        "marca": "Gibson",
        "precio": 5999900,
        "img": "img/guitar6.png"
    },
    {
        "nombre_producto": "Guitarra eléctrica Yamaha PAC611VFM",
        "marca": "Yamaha",
        "precio": 1099990,
        "img": "img/guitar7.png"
    },
    {
        "nombre_producto": "Guitarra eléctrica Ibanez IJRX20U - Black",
        "marca": "Ibanez",
        "precio": 299900,
        "img": "img/guitar8.png"
    },
]

CORS(app)

@app.errorhandler(Exception)
def handle_error(error):
    response = {
        "message": "Se produjo un error en el servidor.",
        "error": str(error)
    }
    return jsonify(response), 500

@app.route('/productos', methods = ['GET'])
def obtener_productos():
    return jsonify(productos)

if __name__ == '__main__':
    app.run()