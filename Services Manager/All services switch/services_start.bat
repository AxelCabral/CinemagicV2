cd ../../
cd back-end\services\movies
start cmd /k "npm run dev"
cd ../
cd users
start cmd /k "yarn dev"
cd ../../../
cd front-end
start cmd /k "yarn dev"
pause