from flask import Flask, jsonify

app = Flask(__name__)

productos = [
    {
        "id": 0,
        "nombre_producto": "Guitarra acústica Ibanez GA3",
        "marca": "Ibanez",
        "precio": 169899,
        "tipo_producto": "Guitarra acústica",
        "img": "img/guitar0.png"
    },
    {
        "id": 1,
        "nombre_producto": "Guitarra acústica Vizcaya ARFG94",
        "marca": "Vizcaya",
        "precio": 69990,
        "tipo_producto": "Guitarra acústica",
        "img": "img/guitar1.png"
    },
    {
        "id": 2,
        "nombre_producto": "Guitarra acústica Vizcaya ARCG44",
        "marca": "Vizcaya",
        "precio": 64990,
        "tipo_producto": "Guitarra acústica",
        "img": "img/guitar2.png"
    },
    {
        "id": 3,
        "nombre_producto": "Guitarra acústica clásica Raimundo 118 Nylon",
        "marca": "Raimundo",
        "precio": 599900,
        "tipo_producto": "Guitarra acústica",
        "img": "img/guitar3.png"
    },
    {
        "id": 4,
        "nombre_producto": "Guitarra clásica Takamine GC1",
        "marca": "Takamine",
        "precio": 259900,
        "tipo_producto": "Guitarra acústica",
        "img": "img/guitar4.png"
    },
    {
        "id": 5,
        "nombre_producto": "Guitarra eléctrica Gibson Les Paul Classic",
        "marca": "Gibson",
        "precio": 2999900,
        "tipo_producto": "Guitarra eléctrica",
        "img": "img/guitar5.png"
    },
    {
        "id": 6,
        "nombre_producto": "Guitarra eléctrica Gibson Les Paul Custom Reissue",
        "marca": "Gibson",
        "precio": 5999900,
        "tipo_producto": "Guitarra eléctrica",
        "img": "img/guitar6.png"
    },
    {
        "id": 7,
        "nombre_producto": "Guitarra eléctrica Yamaha PAC611VFM",
        "marca": "Yamaha",
        "precio": 1099990,
        "tipo_producto": "Guitarra eléctrica",
        "img": "img/guitar7.png"
    },
    {
        "id": 8,
        "nombre_producto": "Guitarra eléctrica Ibanez IJRX20U - Black",
        "marca": "Ibanez",
        "precio": 299900,
        "tipo_producto": "Guitarra eléctrica",
        "img": "img/guitar8.png"
    },
]

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