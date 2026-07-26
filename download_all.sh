#!/bin/bash
declare -A urls
urls=(
  ["a1.JPG"]="1N9eCwhPhtz3ChbnG1Pnp8vOVFZkXWr8r"
  ["a2.JPG"]="1yU2INTojFS056TsZHWHZVGvHB7fxDxxT"
  ["a3.JPG"]="1MC_4zTElOu0Z3-1ArsABuzI_uGjck4VK"
  ["a4.JPG"]="1N4xxbD0TltuxXGWptd5gvWdxUDNTfg-d"
  ["a5.JPG"]="1TeMAjBgPGQb5Qb5ocas7xA01wXK30llv"
  ["a6.JPG"]="15sfsdNVlz0Nibl8TBJfSpGwE8vMEttOe"
  ["a7.JPG"]="142HC5xjgsweT1UanJQRUlWFIcC3aew6w"
  ["a8.JPG"]="1BSEqoet2Ty6Ekiz0P3VyUS3spHyDvKpk"
  ["a9.JPG"]="1U7hXQ3j0Rwo9te6kNgQ-Cyz8wz3-lERi"
  ["a10.JPG"]="1NjwtI15pQ7Orta2WpJZezwNEa2UBGAV8"
  ["a11.JPG"]="1MNKlBkwhh9jNi0LQTw15iugoff6P2-V1"
  ["a12.JPG"]="1Bvj4zTGfPt-DiRwNRdL_s08-bn75boVg"
  ["b2.JPG"]="1RpQe_DYk9n0TQMtQW3wCXKA9sLb7oEyq"
  ["b3.JPG"]="1wpa7eeaEiRJkXTeCA0bs4cJpQILZtJQk"
  ["b4.JPG"]="1LX0VsRt2Tgh1VfL0dHILtci3FnLG79uk"
  ["b5.JPG"]="1CBwe21NNY5ifRWJX5gRpUH_ymV6ksjux"
  ["b7.JPG"]="1o__9TKhcDyIGHuGsbsiJ24sV2JxR1joW"
  ["b8.JPG"]="1PsLiZ2J_x8TGzfwTXk7p1IcqkcaOVV4w"
  ["b9.JPG"]="1YATQzXjrjYf8k0ZsdhEUPjwl0RwMgQ7g"
  ["b10.JPG"]="1aVxmegQ3jhfjRTB7X81K85nbMKYHbNSA"
  ["b11.JPG"]="1LWicSGEtK3e_o1dMrYHhWzAuG_qaxR54"
  ["pexels-reyd-valencia-2159301653-36878353.jpg.jpeg"]="1eWSyZmjnfjviqxv8e8kDUmXwWsj04iiO"
  ["page1JPG.JPG"]="1qtzQGOD4w5k4U4DdWowNj403kwEmjpvs"
  ["page 2.JPG"]="1oUSt808FXQozNUw_uIj3y1oRe9KTWMkJ"
  ["adsg1.JPG"]="13JnyKn58Cz155fLmEJoSsSQKrFx0SMII"
  ["adsg2.JPG"]="1vylLOR94ANdDw3TQHKTvYa-8oDvHstwN"
)

for file in "${!urls[@]}"; do
  id="${urls[$file]}"
  echo "Downloading $file ($id)..."
  curl -sL "https://drive.google.com/uc?export=download&id=$id" -o "public/$file"
done
