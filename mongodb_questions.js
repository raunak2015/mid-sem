const mongodbQuestions = [
    {
        id: 1,
        question: "Which query finds jobs where salaryLPA is greater than 30?",
        options: ["{ salaryLPA: { $gte: 30 } }", "{ salaryLPA: { $gt: 30 } }", "{ salaryLPA: 30 }", "{ salaryLPA > 30 }"],
        answer: 1,
        topic: "Comparison Operators"
    },
    {
        id: 2,
        question: "Which query finds jobs where experience is exactly 3?",
        options: ["{ experience: { $eq: 3 } }", "{ experience: 3 }", "Both A and B", "{ experience == 3 }"],
        answer: 2,
        topic: "Core Queries"
    },
    {
        id: 3,
        question: "Find jobs where company is Google AND location is Bangalore.",
        options: ["{ company:'Google', location:'Bangalore' }", "{ $and:[ {company:'Google'}, {location:'Bangalore'} ] }", "Both A and B", "{ company:'Google' || location:'Bangalore' }"],
        answer: 2,
        topic: "Logical Operators"
    },
    {
        id: 4,
        question: "Which query finds jobs where salaryLPA is between 20 and 30 inclusive?",
        options: ["{ salaryLPA:{ $gt:20,$lt:30 } }", "{ salaryLPA:{ $gte:20,$lte:30 } }", "{ salaryLPA:[20,30] }", "{ salaryLPA:{ $range:[20,30] } }"],
        answer: 1,
        topic: "Comparison Operators"
    },
    {
        id: 5,
        question: "Which query finds jobs where experience is NOT equal to 2?",
        options: ["{ experience:{ $ne:2 } }", "{ experience:{ $not:2 } }", "{ experience !=2 }", "{ experience:{ $exclude:2 } }"],
        answer: 0,
        topic: "Comparison Operators"
    },
    {
        id: 6,
        question: "Which query ensures both 'MongoDB' and 'Node.js' exist in skills?",
        options: ["{ skills:{ $in:['MongoDB','Node.js'] } }", "{ skills:{ $all:['MongoDB','Node.js'] } }", "{ skills:['MongoDB','Node.js'] }", "{ skills:{ $size:2 } }"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 7,
        question: "Which query checks experience is even?",
        options: ["{ experience:{ $mod:[2,0] } }", "{ experience:{ $even:true } }", "{ experience%2==0 }", "Not possible"],
        answer: 0,
        topic: "Numerical Operators"
    },
    {
        id: 8,
        question: "Which query compares salaryLPA and experience?",
        options: ["{ salaryLPA:{ $gt:experience } }", "{ $expr:{ $gt:['$salaryLPA','$experience'] } }", "{ $compare:['salaryLPA','experience'] }", "Not possible"],
        answer: 1,
        topic: "Expression Operators"
    },
    {
        id: 9,
        question: "Projection to show only company and salaryLPA without _id:",
        options: ["{ company:1, salaryLPA:1 }", "{ company:1, salaryLPA:1, _id:0 }", "{ company:true, salaryLPA:true }", "{ company:1, salaryLPA:0 }"],
        answer: 1,
        topic: "Projections"
    },
    {
        id: 10,
        question: "Correct skip value for page=3, size=10:",
        options: ["20", "30", "10", "40"],
        answer: 0,
        topic: "Pagination"
    },
    {
        id: 11,
        question: "Which index best supports filtering by location and sorting by salaryLPA descending?",
        options: ["{ salaryLPA:-1 }", "{ location:1, salaryLPA:-1 }", "{ salaryLPA:-1, location:1 }", "{ location:1 }"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 12,
        question: "If explain() shows COLLSCAN, it means:",
        options: ["Index used", "Full collection scanned", "Join performed", "Error"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 13,
        question: "Which stage groups jobs by company?",
        options: ["$match", "$group", "$project", "$sort"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 14,
        question: "To count total jobs per company:",
        options: ["$group with $sum:1", "$count", "Both A and B", "$size"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 15,
        question: "Which pipeline is correct to find average salary per location?",
        options: ["$group only", "$match -> $group", "$group -> $match", "$sort -> $group"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 16,
        question: "Which query finds jobs where salaryLPA is less than or equal to 20?",
        options: ["{ salaryLPA: { $lt: 20 } }", "{ salaryLPA: { $lte: 20 } }", "{ salaryLPA: 20 }", "{ salaryLPA: { $le: 20 } }"],
        answer: 1,
        topic: "Comparison Operators"
    },
    {
        id: 17,
        question: "Which query finds jobs where location is NOT 'Remote'?",
        options: ["{ location: { $ne: 'Remote' } }", "{ location: { $not: 'Remote' } }", "{ location != 'Remote' }", "{ location: { $exclude: 'Remote' } }"],
        answer: 0,
        topic: "Comparison Operators"
    },
    {
        id: 18,
        question: "Which query finds jobs where experience is either 2, 4, or 6?",
        options: ["{ experience: [2,4,6] }", "{ experience: { $in: [2,4,6] } }", "{ experience: { $all: [2,4,6] } }", "{ experience: { $or: [2,4,6] } }"],
        answer: 1,
        topic: "Membership Operators"
    },
    {
        id: 19,
        question: "Which query correctly finds jobs where company is neither Google nor Amazon?",
        options: ["{ company: { $ne: ['Google','Amazon'] } }", "{ company: { $nin: ['Google','Amazon'] } }", "{ $nor: [{company:'Google'}, {company:'Amazon'}] }", "Both B and C"],
        answer: 3,
        topic: "Logical Operators"
    },
    {
        id: 20,
        question: "Which query finds jobs where salaryLPA is greater than 25 AND experience is at least 3?",
        options: ["{ salaryLPA:{ $gt:25 }, experience:{ $gte:3 } }", "{ $and:[{salaryLPA:{ $gt:25 }},{experience:{ $gte:3 }}] }", "Both A and B", "{ $or:[...] }"],
        answer: 2,
        topic: "Logical Operators"
    },
    {
        id: 21,
        question: "Which projection hides only the skills field?",
        options: ["{ skills:0 }", "{ skills:false }", "{ skills:null }", "{ skills:remove }"],
        answer: 0,
        topic: "Projections"
    },
    {
        id: 22,
        question: "Which projection shows only company, role, and location?",
        options: ["{ company:1, role:1, location:1 }", "{ company:true, role:true, location:true }", "Both A and B (excluding _id by default)", "{ company:1, role:1, location:1, _id:0 }"],
        answer: 3,
        topic: "Projections"
    },
    {
        id: 23,
        question: "If index is { location:1, salaryLPA:-1 }, which query uses prefix rule correctly?",
        options: ["Filter by location only", "Filter by salary only", "Sort by salary only", "Filter by experience"],
        answer: 0,
        topic: "Indexes"
    },
    {
        id: 24,
        question: "If query filters only by salaryLPA but index is { location:1, salaryLPA:1 }, what happens?",
        options: ["Full index used", "Partial index used", "Prefix rule violated", "Error"],
        answer: 2,
        topic: "Indexes"
    },
    {
        id: 25,
        question: "Which aggregation finds total jobs per location?",
        options: ["$group: { _id:'$location', total:{ $sum:1 } }", "$match: { location }", "$project: { location }", "$sort: { location:1 }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 26,
        question: "Which aggregation calculates average salary per company?",
        options: ["$group: { _id:'$company', avgSalary:{ $avg:'$salaryLPA' } }", "$group: { company:{ $avg:'$salaryLPA' } }", "$avg: '$salaryLPA'", "$project: { avgSalary }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 27,
        question: "Which pipeline order is correct for performance?",
        options: ["$group -> $match", "$match -> $group", "$sort -> $match", "$limit -> $match"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 28,
        question: "Which stage calculates new field doubleSalary = salaryLPA * 2?",
        options: ["$project", "$addFields", "$group", "$match"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 29,
        question: "Which query finds jobs where salaryLPA is greater than experience * 6?",
        options: ["$expr with $multiply", "$gt only", "$sum", "Not possible"],
        answer: 0,
        topic: "Expression Operators"
    },
    {
        id: 30,
        question: "Which stage sorts jobs by salaryLPA descending?",
        options: ["{ $sort: { salaryLPA: -1 } }", "{ $sort: { salaryLPA: 1 } }", "{ $order: { salaryLPA: -1 } }", "{ $arrange: { salaryLPA: -1 } }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 31,
        question: "To get top 5 highest salary jobs using aggregation:",
        options: ["$limit:5 only", "$sort -> $limit", "$limit -> $sort", "$group"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 32,
        question: "Which explain output stage indicates index usage?",
        options: ["COLLSCAN", "IXSCAN", "SORT", "LIMIT"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 33,
        question: "If docsExamined = 1000 and nReturned = 10, performance is:",
        options: ["Efficient", "Poorly optimized", "Perfect", "Indexed"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 34,
        question: "Which index type is best for searching skills using keywords?",
        options: ["Compound", "Hashed", "Text", "Multikey"],
        answer: 2,
        topic: "Indexes"
    },
    {
        id: 35,
        question: "Hashed index is best suited for:",
        options: ["Range queries", "Sorting", "Equality queries", "Regex"],
        answer: 2,
        topic: "Indexes"
    },
    {
        id: 36,
        question: "Which query finds jobs where salaryLPA is NOT less than 20?",
        options: ["{ salaryLPA:{ $gte:20 } }", "{ salaryLPA:{ $not:{ $lt:20 } } }", "Both A and B", "{ salaryLPA:20 }"],
        answer: 2,
        topic: "Logical Operators"
    },
    {
        id: 37,
        question: "Which query finds jobs where experience is less than 3 OR salaryLPA >= 30?",
        options: ["$or query", "Implicit AND", "$all", "$size"],
        answer: 0,
        topic: "Logical Operators"
    },
    {
        id: 38,
        question: "Which query checks that skills array contains at least one element?",
        options: ["{ skills:{ $exists:true } }", "{ skills:{ $size:1 } }", "{ skills:{ $not:{ $size:0 } } }", "{ skills:true }"],
        answer: 2,
        topic: "Array Operators"
    },
    {
        id: 39,
        question: "Which stage renames salaryLPA to salary in output?",
        options: ["$project:{ salary:'$salaryLPA' }", "$group", "$match", "$addFields only"],
        answer: 0,
        topic: "Projections"
    },
    {
        id: 40,
        question: "Which aggregation finds maximum experience per role?",
        options: ["$group:{ _id:'$role', maxExp:{ $max:'$experience' } }", "$group:{ role:{ $max:'$experience' } }", "$project:{ max:'$experience' }", "$match"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 41,
        question: "Which aggregation finds minimum salary per location?",
        options: ["$group:{ _id:'$location', minSalary:{ $min:'$salaryLPA' } }", "$sum", "$avg", "$project"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 42,
        question: "Which stage reduces dataset size before grouping?",
        options: ["$sort", "$match", "$limit", "$lookup"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 43,
        question: "If index supports sort, blocking sort:",
        options: ["Happens", "Does not happen", "Always happens", "Never changes"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 44,
        question: "Which query finds jobs where role is Backend Developer AND experience between 2 and 5?",
        options: ["Implicit AND with $gte and $lte", "$or", "$all", "Not possible"],
        answer: 0,
        topic: "Logical Operators"
    },
    {
        id: 45,
        question: "Which query finds jobs where salaryLPA is either 28, 30, or 35?",
        options: ["$in", "$all", "$size", "$nor"],
        answer: 0,
        topic: "Membership Operators"
    },
    {
        id: 46,
        question: "Which aggregation counts total number of jobs?",
        options: ["$count", "$group with $sum:1", "Both A and B", "$size"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 47,
        question: "Which field in explain() shows returned documents?",
        options: ["docsExamined", "nReturned", "totalDocs", "winningPlan"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 48,
        question: "If index is not used, explain shows:",
        options: ["IXSCAN", "COLLSCAN", "TEXTSCAN", "GROUP"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 49,
        question: "Which query finds jobs where salaryLPA between 18 and 28 AND experience even?",
        options: ["$gte,$lte + $mod", "$in", "$all", "$exists"],
        answer: 0,
        topic: "Logical Operators"
    },
    {
        id: 50,
        question: "Which query finds jobs where company starts with letter 'G'?",
        options: ["{ company:{ $regex:'^G' } }", "{ company:'G%' }", "{ company:{ $startsWith:'G' } }", "{ company:G* }"],
        answer: 0,
        topic: "Regex Operators"
    },
    {
        id: 51,
        question: "Which index improves filtering by company and experience together?",
        options: ["{ company:1, experience:1 }", "{ experience:1 }", "{ company:-1 }", "Text index"],
        answer: 0,
        topic: "Indexes"
    },
    {
        id: 52,
        question: "Which stage flattens skills array before grouping?",
        options: ["$unwind", "$split", "$flatten", "$explode"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 53,
        question: "Which aggregation finds total salary per company?",
        options: ["$group:{ _id:'$company', total:{ $sum:'$salaryLPA' } }", "$sum", "$project", "$match"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 54,
        question: "Which query finds jobs where salaryLPA is greater than 40 OR experience >= 6?",
        options: ["$or query", "Implicit AND", "$all", "$size"],
        answer: 0,
        topic: "Logical Operators"
    },
    {
        id: 55,
        question: "Which aggregation finds average experience per location?",
        options: ["$group:{ _id:'$location', avgExp:{ $avg:'$experience' } }", "$sum", "$project", "$limit"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 56,
        question: "If too many indexes exist, insert performance:",
        options: ["Improves", "Slows down", "Unaffected", "Doubles"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 57,
        question: "Which is best practice in aggregation performance?",
        options: ["Group first", "Match early", "Lookup first", "Sort first"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 58,
        question: "Which stage joins jobs with another collection?",
        options: ["$join", "$lookup", "$merge", "$combine"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 59,
        question: "Which query finds experience exactly 5?",
        options: ["{ experience:5 }", "{ experience:{ $eq:5 } }", "Both A and B", "{ experience ==5 }"],
        answer: 2,
        topic: "Core Queries"
    },
    {
        id: 60,
        question: "Which is correct pipeline to get top 3 highest salary jobs?",
        options: ["$limit -> $sort", "$sort -> $limit", "$group -> $limit", "$match -> $limit"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 61,
        question: "Which query displays only name and rating without _id?",
        options: ["{ name:1, rating:1 }", "{ name:1, rating:1, _id:0 }", "{ name:true, rating:true }", "{ rating:0 }"],
        answer: 1,
        topic: "Projections"
    },
    {
        id: 62,
        question: "Which query hides only the URL field but shows all other fields?",
        options: ["{ URL:0 }", "{ URL:false }", "{ URL:null }", "{ URL:remove }"],
        answer: 0,
        topic: "Projections"
    },
    {
        id: 63,
        question: "Which query sorts restaurants by rating from highest to lowest?",
        options: [".sort({ rating:1 })", ".sort({ rating:-1 })", ".order({ rating:-1 })", ".sort(rating)"],
        answer: 1,
        topic: "Sorting"
    },
    {
        id: 64,
        question: "Which query sorts restaurants alphabetically by name?",
        options: [".sort({ name:1 })", ".sort({ name:-1 })", ".sort(name)", ".order({ name:1 })"],
        answer: 0,
        topic: "Sorting"
    },
    {
        id: 65,
        question: "For page = 3 and page size = 10, what is the correct skip value?",
        options: ["10", "20", "30", "40"],
        answer: 1,
        topic: "Pagination"
    },
    {
        id: 66,
        question: "Which query retrieves restaurants where rating is between 4 and 5 inclusive?",
        options: ["{ rating:{ $gt:4, $lt:5 } }", "{ rating:{ $gte:4, $lte:5 } }", "{ rating:[4,5] }", "{ rating:{ $in:[4,5] } }"],
        answer: 1,
        topic: "Comparison Operators"
    },
    {
        id: 67,
        question: "Which query finds restaurants where type_of_food is 'Thai'?",
        options: ["{ type_of_food:'Thai' }", "{ type_of_food:{ $eq:'Thai' } }", "Both A and B", "{ food:'Thai' }"],
        answer: 2,
        topic: "Core Queries"
    },
    {
        id: 68,
        question: "Which query finds restaurants where name starts with letter 'A'?",
        options: ["{ name:{ $regex:'^A' } }", "{ name:'A%' }", "{ name:{ $startsWith:'A' } }", "{ name:A* }"],
        answer: 0,
        topic: "Regex Operators"
    },
    {
        id: 69,
        question: "Which query finds restaurants where postcode ends with '3JH'?",
        options: ["{ postcode:{ $regex:'3JH$' } }", "{ postcode:'%3JH' }", "{ postcode:{ $end:'3JH' } }", "{ postcode:3JH$ }"],
        answer: 0,
        topic: "Regex Operators"
    },
    {
        id: 70,
        question: "Which query sorts first by type_of_food (A->Z) and then by rating (high->low)?",
        options: [".sort({ type_of_food:1, rating:-1 })", ".sort({ rating:-1, type_of_food:1 })", ".sort(type_of_food, rating)", ".order({ type_of_food:1, rating:-1 })"],
        answer: 0,
        topic: "Sorting"
    },
    {
        id: 71,
        question: "Which query returns the first 5 highest rated restaurants?",
        options: [".limit(5)", ".sort({ rating:-1 }).limit(5)", ".limit(5).sort({ rating:-1 })", ".sort({ rating:1 }).limit(5)"],
        answer: 1,
        topic: "Sorting"
    },
    {
        id: 72,
        question: "Which query returns the bottom 3 restaurants based on rating?",
        options: [".sort({ rating:-1 }).limit(3)", ".sort({ rating:1 }).limit(3)", ".limit(3)", ".skip(3)"],
        answer: 1,
        topic: "Sorting"
    },
    {
        id: 73,
        question: "Which query counts total number of restaurants?",
        options: [".count()", ".countDocuments()", "Aggregation with $count", "All are valid approaches"],
        answer: 3,
        topic: "Core Queries"
    },
    {
        id: 74,
        question: "If you sort without an index on rating, explain() will likely show:",
        options: ["IXSCAN", "COLLSCAN", "TEXTSCAN", "GROUP"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 75,
        question: "Which index improves sorting by rating?",
        options: ["{ rating:1 }", "{ name:1 }", "{ postcode:1 }", "{ type_of_food:1 }"],
        answer: 0,
        topic: "Indexes"
    },
    {
        id: 76,
        question: "Which query hides both address and address_line_2?",
        options: ["{ address:0, address_line_2:0 }", "{ address:false, address_line_2:false }", "Both A and B", "{ address:null }"],
        answer: 2,
        topic: "Projections"
    },
    {
        id: 77,
        question: "Which query retrieves restaurants where outcode starts with 'CF'?",
        options: ["{ outcode:{ $regex:'^CF' } }", "{ outcode:'CF%' }", "{ outcode:{ $start:'CF' } }", "{ outcode:CF* }"],
        answer: 0,
        topic: "Regex Operators"
    },
    {
        id: 78,
        question: "Why should sorting be applied before pagination?",
        options: ["To reduce memory", "To ensure correct page order", "To create index", "To group data"],
        answer: 1,
        topic: "Pagination"
    },
    {
        id: 79,
        if_skip_is_applied_before_sort: "If skip is applied before sort, result will:",
        options: ["Be correctly ordered globally", "Skip after sorting automatically", "Potentially return incorrect page ordering", "Cause error"],
        answer: 2,
        topic: "Optimization"
    },
    {
        id: 80,
        question: "Which query returns page 2 of Thai restaurants (5 per page) sorted by rating descending?",
        options: [".find({type_of_food:'Thai'}).sort({rating:-1}).skip(5).limit(5)", ".find({type_of_food:'Thai'}).limit(5).skip(5).sort({rating:-1})", ".find().skip(5)", ".sort({rating:-1})"],
        answer: 0,
        topic: "Pagination"
    },
    {
        id: 81,
        question: "Which stage is used to join users and orders collections?",
        options: ["$join", "$lookup", "$link", "$connect"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 82,
        question: "In $lookup, which field connects users._id to orders.userId?",
        options: ["foreignField", "localField", "joinField", "refField"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 83,
        question: "Correct $lookup configuration to join users with orders is:",
        options: ["{ $lookup:{ from:'orders', localField:'_id', foreignField:'userId', as:'orders' } }", "{ $lookup:{ from:'users', localField:'userId', foreignField:'_id', as:'orders' } }", "$join:'orders'", "{ $lookup:'orders' }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 84,
        question: "After $lookup, the joined data appears as:",
        options: ["Object", "String", "Array", "Number"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 85,
        question: "Which stage is required to flatten the orders array?",
        options: ["$group", "$project", "$unwind", "$match"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 86,
        question: "Which pipeline finds users from Delhi with their orders?",
        options: ["[{ $match:{ city:'Delhi' } }, { $lookup:{ from:'orders', localField:'_id', foreignField:'userId', as:'orders' } }]", "Only $lookup", "Only $match", "$group"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 87,
        question: "To find users who have placed at least one order, we should:",
        options: ["$match:{ orders:[] }", "$match:{ orders:{ $ne:[] } }", "$group", "$limit"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 88,
        question: "To find users who have NOT placed any order:",
        options: ["$match:{ orders:[] }", "$match:{ orders:{ $ne:[] } }", "$unwind", "$sort"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 89,
        question: "Which stage calculates total spending per user?",
        options: ["$project", "$group with $sum", "$match", "$lookup"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 90,
        question: "Correct way to calculate total spending per user:",
        options: ["{ $group:{ _id:'$userId', totalSpending:{ $sum:'$price' } } }", "{ $sum:'price' }", "{ $group:'price' }", "{ total:{ $sum } }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 91,
        question: "Which stage must come before grouping if we want city-wise revenue?",
        options: ["$lookup", "$match", "$unwind", "$sort"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 92,
        question: "Which accumulator calculates average order value?",
        options: ["$sum", "$avg", "$count", "$min"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 93,
        question: "Which accumulator finds highest priced order?",
        options: ["$min", "$avg", "$max", "$sum"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 94,
        question: "To rename price as orderPrice, which stage is used?",
        options: ["$group", "$match", "$project", "$lookup"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 95,
        question: "Which pipeline correctly sorts users by total spending descending?",
        options: ["[{ $lookup:{...} }, { $unwind:'$orders' }, { $group:{ _id:'$_id', total:{ $sum:'$orders.price' } } }, { $sort:{ total:-1 } }]", "$sort only", "$match only", "$limit"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 96,
        question: "If $lookup is used without $unwind, grouping by price will:",
        options: ["Fail", "Work on arrays", "Automatically flatten", "Remove documents"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 97,
        question: "Which stage reduces fields in final output?",
        options: ["$match", "$project", "$group", "$lookup"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 98,
        question: "Which pipeline order is correct?",
        options: ["$group -> $match -> $lookup", "$match -> $lookup -> $group", "$sort -> $match -> $lookup", "$limit -> $group -> $lookup"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 99,
        question: "Which query finds top 3 expensive orders with user details?",
        options: ["[{ $lookup:{...} }, { $unwind:'$orders' }, { $sort:{ 'orders.price':-1 } }, { $limit:3 }]", "$limit first", "$group only", "$match only"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 100,
        question: "Which statement is TRUE about $lookup?",
        options: ["It performs inner join only", "It performs left outer join", "It removes unmatched documents", "It modifies data permanently"],
        answer: 1,
        topic: "Aggregation"
    }
];

export default mongodbQuestions;
