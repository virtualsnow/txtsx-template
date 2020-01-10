#Do not use for production.
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def test_index():
    return render_template('lander.html',STATIC_PREFIX='/static/')

@app.route('/base')
def test_base():
    return render_template('base.html',STATIC_PREFIX='/static/')

@app.route('/404')
def test_404():
    return render_template('404.html',STATIC_PREFIX='/static/')

if __name__ == "__main__":
    app.run()
