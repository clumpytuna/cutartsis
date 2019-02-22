#!/usr/bin/env fontforge

Open($1, 1);
#SelectAll();
#
## заглавные английские буквы
#SelectFewer(0u41, 0u5a);
## строчные английские буквы
#SelectFewer(0u61, 0u7a);
## пробел
#SelectFewer(0u20);
#
#DetachAndRemoveGlyphs();
#Reencode('compacted');

## Random
#Select('R');
#SetLBearing(0);
## randoM
#Select('M');
#SetRBearing(0);
## about uS
#Select('S');
#SetRBearing(0);
## Donate
#Select('D');
#SetLBearing(0);
## donatE
#Select('E');
#SetRBearing(0);

Select('R');
Print( GlyphInfo('Width') )

#DetachAndRemoveGlyphs();
#Reencode('compacted');

Generate($2);
Quit(0);
