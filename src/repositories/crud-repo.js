class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = this.model.create(data);
        return response;
    }

    async get(id){
        const response = this.model.findByPk(id);
        if(!response){
            console.log("error in repo-get");
            throw error;
        }
        return response;
    }

    async update(id,data){
        const response = this.model.update(data,{
            where:{
                id : id
            }
        });
        return response;
    }

    async destroy(data){
            const response = this.model.destroy({ where :{
                id : data }
            });
            return response;   
    }
}

module.exports = CrudRepository;