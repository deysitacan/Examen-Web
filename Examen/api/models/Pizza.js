/**
 * Pizza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    ingrediente:{
      type:'string',
      required:true
    },
    
    fkIdDepartamento:{
      model:'Departamento'
    },
    periodosAcademicos:{
      collection:'PeriodoAcademico',
      via:'fkIdCarrera'
    }

  }
};

