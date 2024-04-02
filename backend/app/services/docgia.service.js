const { ObjectId } = require("mongodb");
class DongiaService {
    constructor(client) {
        this.Docgia = client.db().collection("docgias");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractDocgiaData(payload) {
        const docgia = {
            madocgia: payload.madocgia,
            holot: payload.holot,
            ten: payload.ten,
            ngaysinh: payload.ngaysinh,
            phai: payload.phai,
            diachi: payload.diachi,
            dienthoai: payload.dienthoai,
        }

        // Loại bỏ những trường không không được định nghĩa
        Object.keys(docgia).forEach(
            (key) => docgia[key] === undefined && delete docgia[key]
        );
        return docgia;
    }

    // create
    async create(payload) {
        const docgia = this.extractDocgiaData(payload);
        docgia.created_at = new Date().toLocaleString();
        docgia.updated_at = new Date().toLocaleString();
        return await this.Docgia.insertOne(docgia);
    }

    async find(filter) {
        const result = await this.Docgia.find(filter);
        return await result.toArray();
    }

    async findByName(name) { 
        console.log(name)
        try {
            let documents = await this.Docgia.find({
                $or: [
                    { holot: {$regex: new RegExp(name), $options: 'i'} },
                    { ten: {$regex: new RegExp(name), $options: 'i'} }
                ]
            });
            console.log(documents);
            return documents;
        } catch (error) {
            throw new Error("Error occurred while finding documents by name: " + error.message);
        }
    }



}
module.exports = DongiaService;