let Company = require('../database/models/company')
let httpStatus = require('../helpers/httpStatus')


class CompanyController {
    static async getCompany(req, res){
        let company;
        try {
            company = await Company.findOne({name : 'E-comerce'})
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        res.status(httpStatus.OK).json({
            company
        })
    }

    static async created(req, res){
        let { name, titleMision, mission, culture, vision, founders } = req.body
        let company = new Company({
            name,
            titleMision, 
            mission,
            culture,
            vision,
            founders

        })
        try {
            await company.save()
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        res.status(httpStatus.CREATED).json({
            msg: 'company succesfelly created',
            company
        })
    }
}


module.exports = CompanyController