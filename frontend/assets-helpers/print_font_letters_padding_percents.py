import fontforge
font = fontforge.open('../src/assets/Berthold.otf')

r = font['S']
#a = font
a = r
print('\n\n\n')
for attr in dir(a):
    if not attr.startswith('__'):
        print(attr, getattr(a, attr), sep='        ')
exit()

print()
print()
print('word, left_letter_width, padding_left, padding_right')
print('====================================================')

words = ['ART', 'RANDOM', 'ABOUT US', 'DONATE']
for word in words:
    letter_left = font[word[0]]
    letter_right = font[word[-1]]
    letter_left_actual_width = letter_left.width - letter_left.left_side_bearing - letter_left.right_side_bearing
    print(word, letter_left_actual_width, letter_left.left_side_bearing, letter_right.right_side_bearing, sep='    ')
