#builds a static version of site for deployment into /output
from jinja2 import Environment, FileSystemLoader, select_autoescape
from pathlib import Path
from shutil import copytree,rmtree
import os

final_templates = ['lander.html', '404.html']
static_dir = "static"

def make_output_dir(output_dir):
    Path(output_dir).mkdir(parents=True, exist_ok=True)

def generate_static(output_dir="./output", static_prefix="/static/"):

    if os.path.isdir(output_dir):
        print("Clearing output directory..")
        rmtree(output_dir)

    env = Environment(
        loader=FileSystemLoader('templates'),
        autoescape=select_autoescape(['html', 'xml'])
    )

    make_output_dir(output_dir)

    for leaf in final_templates:
        leaf_template = env.get_template(leaf)
        leaf_html = leaf_template.render(foo='bar', STATIC_PREFIX=static_prefix)
        print("Writing {} to {}...".format(leaf, output_dir+"/"+leaf))
        with open(output_dir+"/"+leaf, "w+") as f:
            f.write(leaf_html)

    print("Copying static files to {}".format(output_dir))
    copytree(static_dir, output_dir+"/"+static_dir)

    print("Done! Static site ready in {}".format(output_dir))


if __name__ == '__main__':
    #For testing.
    #generate_static(static_prefix="./static/")
    generate_static()
