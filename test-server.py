#!/usr/bin/python3
#Do not use for production.
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def test_index():
    return render_template('directory/lander.html',STATIC_PREFIX='/static/')

@app.route('/skeleton')
def test_skeleton():
    return render_template('base/skeleton.html',STATIC_PREFIX='/static/')

@app.route('/404')
def test_404():
    return render_template('base/404.html',STATIC_PREFIX='/static/')

@app.route('/contact')
def test_contact():
    return render_template('directory/contact.html',STATIC_PREFIX='/static/')

@app.route('/test_long')
def test_long():
    return render_template('directory/test_long.html',STATIC_PREFIX='/static/')

if __name__ == "__main__":
    print("Routes:")
    print("/")
    print("/skeleton")
    print("/404")
    print("/contact")
    print("/test_long")
    app.run()
