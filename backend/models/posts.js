module.exports = (sequelize, DataTypes) =>{

    const posts = sequelize.difine("posts",{
        title:{
            types:DataTypes.STRING,
            allowNull:false,
        },

        postText:{
            types:DataTypes.STRING,
            allowNull:false,
        },

        username:{
            types:DataTypes.STRING,
            allowNull:false,
        }

    })
    return posts;

}