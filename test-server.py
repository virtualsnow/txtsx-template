#!/usr/bin/python
#Do not use for production.
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def test_index():
    return render_template('lander.html',STATIC_PREFIX='/static/')

@app.route('/skeleton')
def test_skeleton():
    return render_template('skeleton.html',STATIC_PREFIX='/static/')

@app.route('/404')
def test_404():
    return render_template('404.html',STATIC_PREFIX='/static/')

@app.route('/contact')
def test_contact():
    return render_template('contact.html',STATIC_PREFIX='/static/')

if __name__ == "__main__":
    print("Routes:")
    print("/\n/skeleton\n/404/\contact")
    app.run()
