import random
from tkinter import *

names = ["Akira", "Ren", "Hikari", "Kaito", "Yumi"]
powers = ["Fire Control", "Ice Magic", "Shadow Power", "Lightning Speed", "Dragon Strength"]
weapons = ["Katana", "Magic Staff", "Bow", "Giant Sword", "Energy Blade"]
worlds = ["Cyber Tokyo", "Ancient Japan", "Space Colony", "Hidden Ninja Village"]

def generate():
    name = random.choice(names)
    power = random.choice(powers)
    weapon = random.choice(weapons)
    world = random.choice(worlds)

    result.set(f"Name: {name}\nPower: {power}\nWeapon: {weapon}\nWorld: {world}")

root = Tk()
root.title("Manga Character Generator")
root.geometry("350x250")

result = StringVar()
result.set("Press button to create character")

label = Label(root, textvariable=result, font=("Arial", 12))
label.pack(pady=30)

btn = Button(root, text="Generate Character", command=generate)
btn.pack()

root.mainloop()