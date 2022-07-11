class Sorted{

    static limit(object){
        return object.map((ob, i)=>{
            if (i < 5) {
                return ob
            }
        })
    }
    static sortFeatured(object, order) {
        if (order === 'DESC') {
            object.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return 1;
                }
                if (a.rating < b.rating) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        } else{
            object.sort(function (a, b) {
                if (a.rating < b.rating) {
                    return 1;
                }
                if (a.rating > b.rating) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        }
        
        return this.limit(object)
    
    }

    static sortBestSellers(object, order){
        if (order === 'DESC') {
            object.sort(function (a, b) {
                if (a.salescount > b.salescount) {
                    return 1;
                }
                if (a.salescount < b.salescount) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        } else{
            object.sort(function (a, b) {
                if (a.salescount < b.salescount) {
                    return 1;
                }
                if (a.salescount > b.salescount) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        }
    
        return this.limit(object)
    }


}





module.exports = Sorted