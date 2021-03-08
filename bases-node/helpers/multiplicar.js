const fs = require('fs'); // hacemos el require al filesistem

const crearArchivo = async ( base = 5) =>{
   try{
       let salida = '';

       console.log('=====================')
       console.log(`la tabla del ${ base }`)
       console.log('=====================')

       for (let i = 1; i <= 10; i++) {    salida += `${base} x ${i} = ${base * i} \n`
       }
       console.log(salida)

       fs.writeFileSync(`tabla-${base}.txt`, salida);
      return  `La tabla del ${base}`;

   } catch (err){
       throw err;
   }


// -- usando el wrifeFile --
// fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
//     if(err) throw err;
//     console.log(`La tabla del ${base} fue creada`);
// })
}

module.exports ={
    crearArchivo
}