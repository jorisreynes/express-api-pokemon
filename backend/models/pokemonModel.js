const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema(
    {
        idPokedex:{
            type:Number,
            required: [true, 'Please add a value']
        },
        name: {
            type: String,
            required: [true, 'Please add a text value']
        },
        height:{
            type:Number,
            required: [true, 'Please add a value']
        },
        weight:{
            type:Number,
            required: [true, 'Please add a value']
        },
        statistiques:{
            type:String,
            required: [true, 'Please add a value']
        },
        type:{
            type:typeSchema,
            required: [true, 'please add a type']
        }
    }, 
    {
        timestamps: true
    }
)

const competenceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        description:{
            type:Number,
            required: [true, 'Please add a value']
        },
        power:{
            type:Number,
            required: [true, 'Please add a value']
        },
        precision:{
            type:Number,
            required: [true, 'Please add a value']
        },
        ppMax:{
            type:Number,
            required: [true, 'Please add a value']
        },
        type:{
            type:typeSchema,
            required: [true, 'please add a type']
        }
        

    }
)

const typeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name']
        }
        
    }
)


module.exports = mongoose.model('Pokemon', pokemonSchema, 'Competences', competenceSchema, 'Type', typeSchema)