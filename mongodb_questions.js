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
    },,
    {
        id: 101,
        question: "Which of the following is the default storage engine for MongoDB since version 3.2?",
        options: ["MMAPv1","WiredTiger","In-Memory","RocksDB"],
        answer: 1,
        topic: "Storage Engines"
    },
    {
        id: 102,
        question: "What is the maximum size of a BSON document in MongoDB?",
        options: ["8 MB","16 MB","32 MB","64 MB"],
        answer: 1,
        topic: "Limits"
    },
    {
        id: 103,
        question: "Which field type is often used for unique identifiers in MongoDB documents?",
        options: ["UUID","ObjectID","GUID","String"],
        answer: 1,
        topic: "Data Types"
    },
    {
        id: 104,
        question: "In MongoDB, what does a 'namespace' consist of?",
        options: ["Database name only","Collection name only","Database name + Collection name","Cluster name"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 105,
        question: "Which command is used to see the list of all databases?",
        options: ["show dbs","list dbs","get dbs","view databases"],
        answer: 0,
        topic: "Basic Commands"
    },
    {
        id: 106,
        question: "What does BSON stand for?",
        options: ["Binary Standard Object Notation","Basic Serialized Object Notation","Binary JSON","Boolean String Object Network"],
        answer: 2,
        topic: "Data Formats"
    },
    {
        id: 107,
        question: "Which of the following is NOT a valid MongoDB document structure?",
        options: ["{ name: 'John' }","{ ages: [20, 30] }","{ 'salary': 5000, }","{ name: 'John', age: 25, name: 'Doe' }"],
        answer: 3,
        topic: "Validation"
    },
    {
        id: 108,
        question: "Which operator is used to update the value of a field in a document?",
        options: ["$update","$change","$set","$modify"],
        answer: 2,
        topic: "Update Operators"
    },
    {
        id: 109,
        question: "What is the primary benefit of embedding documents in MongoDB?",
        options: ["Better normalization","Data integrity","Atomicity for related data","Smaller storage size"],
        answer: 2,
        topic: "Data Modeling"
    },
    {
        id: 110,
        question: "Which command removes all documents from a collection but keeps the collection itself?",
        options: ["db.collection.drop()","db.collection.deleteMany({})","db.collection.remove()","db.collection.clear()"],
        answer: 1,
        topic: "CRUD Operations"
    },
    {
        id: 111,
        question: "What is an 'Oplog' used for in MongoDB?",
        options: ["Logging errors","Replication","Tracking user logins","Query optimization"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 112,
        question: "In a Replica Set, which member is responsible for accepting all write operations?",
        options: ["Secondary","Arbiter","Primary","Hidden"],
        answer: 2,
        topic: "Replication"
    },
    {
        id: 113,
        question: "What is the purpose of an Arbiter in a Replica Set?",
        options: ["To hold data","To serve reads","To provide a vote in elections","To backup data"],
        answer: 2,
        topic: "Replication"
    },
    {
        id: 114,
        question: "Which command provides information about the replica set configuration?",
        options: ["rs.status()","rs.conf()","rs.info()","db.replicaSet()"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 115,
        question: "What is the minimum number of members recommended for a healthy Replica Set?",
        options: ["1","2","3","5"],
        answer: 2,
        topic: "Replication"
    },
    {
        id: 116,
        question: "What happens if the Primary member of a Replica Set becomes unavailable?",
        options: ["The group becomes read-only","A secondary is automatically elected as Primary","Writing stops permanently","The database crashes"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 117,
        question: "Which type of replication member does NOT maintain a copy of the data?",
        options: ["Passive","Arbiter","Secondary","Delayed"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 118,
        question: "Which write concern ensures the write operation has propagated to a majority of members?",
        options: ["{ w: 0 }","{ w: 1 }","{ w: 'majority' }","{ w: 2 }"],
        answer: 2,
        topic: "Consistency"
    },
    {
        id: 119,
        question: "Which read preference allows reading from the member with the lowest latency?",
        options: ["primary","secondary","nearest","primaryPreferred"],
        answer: 2,
        topic: "Read Preference"
    },
    {
        id: 120,
        question: "What is 'Sharding' in MongoDB?",
        options: ["Horizontal scaling by partitioning data","Vertical scaling by increasing RAM","Encrypting data for security","Deleting old logs"],
        answer: 0,
        topic: "Sharding"
    },
    {
        id: 121,
        question: "In a sharded cluster, which component routes queries to the correct shard?",
        options: ["Shard Server","Config Server","mongos","Replica Set"],
        answer: 2,
        topic: "Sharding"
    },
    {
        id: 122,
        question: "What does the 'Config Server' store in a sharded cluster?",
        options: ["Application data","Metadata and shard mapping","User passwords only","Query logs"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 123,
        question: "What is a 'Shard Key'?",
        options: ["A password for the shard","A field used to distribute data across shards","An index on the config server","The primary key of the shard"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 124,
        question: "Which type of sharding distributes data based on an MD5 hash of the shard key?",
        options: ["Ranged Sharding","Hashed Sharding","Zone Sharding","Vertical Sharding"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 125,
        question: "What is a 'Chunk' in the context of MongoDB sharding?",
        options: ["A small fragment of a document","A contiguous range of shard key values","A single shard server","A backup file"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 126,
        question: "Which command is used to enable sharding for a database?",
        options: ["sh.enableDatabase()","sh.shardDatabase()","db.enableSharding()","cluster.enable()"],
        answer: 0,
        topic: "Sharding"
    },
    {
        id: 127,
        question: "A high-cardinality shard key is better because it:",
        options: ["Reduces storage","Helps in even data distribution","Increases security","Speeds up index creation"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 128,
        question: "Which tool is used for performing a full backup of a MongoDB database to BSON files?",
        options: ["mongoexport","mongodump","mongorestore","mongoimport"],
        answer: 1,
        topic: "Backup Tools"
    },
    {
        id: 129,
        question: "Which command is used to restore data from a BSON backup file?",
        options: ["mongorestore","mongoimport","mongoload","mongo-upload"],
        answer: 0,
        topic: "Backup Tools"
    },
    {
        id: 130,
        question: "What is the difference between mongodump and mongoexport?",
        options: ["mongodump exports JSON, mongoexport exports BSON","mongodump exports BSON, mongoexport exports JSON/CSV","No difference","mongoexport is faster"],
        answer: 1,
        topic: "Backup Tools"
    },
    {
        id: 131,
        question: "Which index type allows specifying an expiration time for documents?",
        options: ["Unique Index","TTL (Time To Live) Index","Sparse Index","Hashed Index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 132,
        question: "A 'Sparse Index' only contains entries for:",
        options: ["Small documents","Documents where the indexed field exists","Frequently accessed documents","Newly created documents"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 133,
        question: "Which type of index is used for GeoJSON data?",
        options: ["2d index","2dsphere index","GeoIndex","LocationIndex"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 134,
        question: "What is the maximum number of fields allowed in a compound index?",
        options: ["8","16","32","64"],
        answer: 2,
        topic: "Limits"
    },
    {
        id: 135,
        question: "Which index type supports full-text search queries?",
        options: ["Search Index","Text Index","String Index","Word Index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 136,
        question: "If you have an index { a: 1, b: 1 }, which of these sorts can use the index?",
        options: ["{ a: 1, b: 1 }","{ a: -1, b: -1 }","Both A and B","{ a: 1, b: -1 }"],
        answer: 2,
        topic: "Indexes"
    },
    {
        id: 137,
        question: "What is a 'Covered Query'?",
        options: ["A query that scans the entire collection","A query that is satisfied entirely by an index","A query that uses encrypted data","A query that has hidden fields"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 138,
        question: "Which command is used to list all indexes on a collection?",
        options: ["db.collection.showIndexes()","db.collection.getIndexes()","db.collection.listIndexes()","db.collection.indexes()"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 139,
        question: "What does the 'Partial Index' do?",
        options: ["Indexes only half of the fields","Indexes only documents that meet a filter expression","Indexes data in memory only","Is used for sharding only"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 140,
        question: "Which index type is required to index an array of values?",
        options: ["Array Index","Multikey Index","List Index","Compound Index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 141,
        question: "In the Aggregation Framework, which stage is used to rename fields?",
        options: ["$rename","$project","$group","$set"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 142,
        question: "Which stage is used for 'Left Outer Join' logic?",
        options: ["$join","$lookup","$combine","$merge"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 143,
        question: "What does the $unwind stage do?",
        options: ["Collapses a collection","Deconstructs an array field into multiple documents","Encrypts a field","Deletes an array"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 144,
        question: "Which stage is used to output the aggregation result to a new collection?",
        options: ["$output","$save","$out","$export"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 145,
        question: "Which stage allows you to run multiple aggregation pipelines on the same input documents?",
        options: ["$parallel","$facet","$bucket","$group"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 146,
        question: "What is the purpose of the $bucket stage?",
        options: ["To delete data","To group documents into 'buckets' based on ranges","To store data in S3","To sort data into buckets"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 147,
        question: "Which stage is used to find paths or relationships in hierarchical data?",
        options: ["$traverse","$graphLookup","$link","$hierarchy"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 148,
        question: "In $lookup, what is the 'pipeline' sub-field used for?",
        options: ["Defining the entire cluster","Joining with conditions beyond simple equality","Defining the Oplog","Speeding up CPU"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 149,
        question: "Which operator is used to calculate the square root within an aggregation stage?",
        options: ["$sqrt","$root","$sq","$mathSqrt"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 150,
        question: "What is the memory limit for a single aggregation stage (without allowDiskUse)?",
        options: ["10 MB","100 MB","1 GB","No limit"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 151,
        question: "Which command in MongoDB acts as a lightweight transaction for a single document?",
        options: ["commit","findAndModify","transaction","save"],
        answer: 1,
        topic: "Transactions"
    },
    {
        id: 152,
        question: "Multi-document ACID transactions were introduced in which MongoDB version?",
        options: ["3.2","4.0","4.2","5.0"],
        answer: 1,
        topic: "Transactions"
    },
    {
        id: 153,
        question: "What is the default isolation level for a multi-document transaction in MongoDB?",
        options: ["Read Uncommitted","Read Committed","Snapshot","Serializable"],
        answer: 2,
        topic: "Transactions"
    },
    {
        id: 154,
        question: "Which write concern ensures that a write has been written to the disk journal?",
        options: ["{ j: true }","{ w: 1 }","{ journaled: 1 }","{ fsync: true }"],
        answer: 0,
        topic: "Durability"
    },
    {
        id: 155,
        question: "What is 'Causal Consistency' in MongoDB?",
        options: ["Queries always return the latest data","A guarantees that related operations are read in order","The database automatically fixes errors","Deleting data cause other data to delete"],
        answer: 1,
        topic: "Consistency"
    },
    {
        id: 156,
        question: "Which component of MongoDB handles monitoring and backup in the Cloud?",
        options: ["mongod","mongos","MongoDB Atlas","Compass"],
        answer: 2,
        topic: "MongoDB Atlas"
    },
    {
        id: 157,
        question: "What is 'GridFS' used for?",
        options: ["Storing small JSON files","Storing and retrieving large files (>16MB)","Managing sharded clusters","Grid-based data visualization"],
        answer: 1,
        topic: "Storage"
    },
    {
        id: 158,
        question: "GridFS stores files in which two collections?",
        options: ["files and chunks","data and index","meta and blob","fs.files and fs.chunks"],
        answer: 3,
        topic: "Storage"
    },
    {
        id: 159,
        question: "What is a 'Capped Collection'?",
        options: ["A collection with no limit","A fixed-size collection that overwrites oldest documents","A collection used for primary keys","A collection that only stores strings"],
        answer: 1,
        topic: "Storage"
    },
    {
        id: 160,
        question: "Which command is used to convert a normal collection to a capped collection?",
        options: ["db.createCollection( {capped: true} )","db.runCommand( {convertToCapped: 'coll', size: 1000} )","db.coll.makeCapped()","Not possible"],
        answer: 1,
        topic: "Storage"
    },
    {
        id: 161,
        question: "What is the purpose of the 'Change Streams' feature?",
        options: ["To modify documents in real-time","To listen for real-time data changes in a collection","To stream videos from MongoDB","To change the database schema"],
        answer: 1,
        topic: "Change Streams"
    },
    {
        id: 162,
        question: "Change Streams rely on which MongoDB feature?",
        options: ["Indexes","Aggregation Framework","Oplog","Both B and C"],
        answer: 3,
        topic: "Change Streams"
    },
    {
        id: 163,
        question: "Which of the following can be monitored using Change Streams?",
        options: ["Inserts","Updates","Deletes","All of the above"],
        answer: 3,
        topic: "Change Streams"
    },
    {
        id: 164,
        question: "What is 'Role-Based Access Control' (RBAC)?",
        options: ["Controlling access based on user roles","Controlling CPU usage per user","Restricting access by IP only","Encrypting passwords"],
        answer: 0,
        topic: "Security"
    },
    {
        id: 165,
        question: "Which built-in role allows a user to read and write data on a specific database?",
        options: ["dbAdmin","readWrite","userAdmin","root"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 166,
        question: "What is the purpose of 'Atlas Search'?",
        options: ["To find databases in Atlas","Full-text search powered by Apache Lucene","To search for MongoDB documentation","An alternative to SQL SELECT"],
        answer: 1,
        topic: "Atlas"
    },
    {
        id: 167,
        question: "Which tool provides a GUI for interacting with MongoDB?",
        options: ["Mongo Shell","MongoDB Compass","mongostat","mongotop"],
        answer: 1,
        topic: "GUI Tools"
    },
    {
        id: 168,
        question: "What does 'mongostat' do?",
        options: ["Shows database statistics like inserts/queries per second","Starts/Stops the MongoDB server","Checks for syntax errors","Installs MongoDB"],
        answer: 0,
        topic: "Monitoring"
    },
    {
        id: 169,
        question: "What does 'mongotop' monitor?",
        options: ["Network traffic","Time spent reading/writing per collection","CPU usage","Disk space"],
        answer: 1,
        topic: "Monitoring"
    },
    {
        id: 170,
        question: "Which command returns information on the query plan for a given operation?",
        options: ["explain()","stats()","debug()","plan()"],
        answer: 0,
        topic: "Optimization"
    },
    {
        id: 171,
        question: "What is the default port for MongoDB?",
        options: ["27017","28017","3306","5432"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 172,
        question: "In MongoDB, what is 'Projection'?",
        options: ["Planning the database schema","Selecting specific fields to return in a query","Scaling the database","Displaying data on a screen"],
        answer: 1,
        topic: "Querying"
    },
    {
        id: 173,
        question: "Which method is used to insert multiple documents at once?",
        options: ["insert()","insertMany()","bulkInsert()","addAll()"],
        answer: 1,
        topic: "CRUD"
    },
    {
        id: 174,
        question: "What happens if you try to insert a document with an _id that already exists?",
        options: ["The document is overwritten","An error is thrown (Duplicate Key)","A new _id is generated","The operation is ignored"],
        answer: 1,
        topic: "CRUD"
    },
    {
        id: 175,
        question: "Which operator matches documents where a field's value is in a specified array?",
        options: ["$all","$in","$match","$exists"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 176,
        question: "What is the purpose of the $exists operator?",
        options: ["To check if a collection exists","To check if a field is present in a document","To check if the database is online","To check if a user is logged in"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 177,
        question: "How do you specify a sort in descending order?",
        options: ["DESC","-1","1","sort(desc)"],
        answer: 1,
        topic: "Sorting"
    },
    {
        id: 178,
        question: "What does DBRef stand for?",
        options: ["Database Refresh","Database Reference","Database Reform","Data Block Reference"],
        answer: 1,
        topic: "Data Modeling"
    },
    {
        id: 179,
        question: "Which command is used to remove a database in the shell?",
        options: ["db.deleteDatabase()","db.dropDatabase()","drop db","rm -rf db"],
        answer: 1,
        topic: "Admin"
    },
    {
        id: 180,
        question: "What is the primary key field name in every MongoDB document?",
        options: ["pk","id","_id","uid"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 181,
        question: "Which type of data consistency does MongoDB provide by default for a single document?",
        options: ["Eventual Consistency","Strong Consistency","Partial Consistency","No Consistency"],
        answer: 1,
        topic: "Consistency"
    },
    {
        id: 182,
        question: "Which of these is NOT a valid MongoDB limit?",
        options: ["100 levels of document nesting","16MB document size","64 indexes per collection","No limit on database name length"],
        answer: 3,
        topic: "Limits"
    },
    {
        id: 183,
        question: "What is 'Upsert'?",
        options: ["Updating all documents","Inserting if document doesn't exist, else updating","Uploading a script","Deleting and then inserting"],
        answer: 1,
        topic: "CRUD"
    },
    {
        id: 184,
        question: "Which operator is used to remove a field from a document?",
        options: ["$delete","$remove","$unset","$pop"],
        answer: 2,
        topic: "Update Operators"
    },
    {
        id: 185,
        question: "What does the $inc operator do?",
        options: ["Includes a field","Increments a field value by a specified amount","Income calculation","Initializes a document"],
        answer: 1,
        topic: "Update Operators"
    },
    {
        id: 186,
        question: "Which operator is used to add an element to an array?",
        options: ["$add","$push","$append","$insert"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 187,
        question: "What is the 'Query Optimizer'?",
        options: ["A tool to write queries faster","A component that selects the most efficient execution plan for a query","A database admin role","A plugin for VS Code"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 188,
        question: "Which command is used to manually trigger a compact operation on a collection?",
        options: ["db.collection.compact()","db.runCommand({compact: 'coll'})","db.compactCollection()","Not possible"],
        answer: 1,
        topic: "Admin"
    },
    {
        id: 189,
        question: "Which MongoDB tool is web-based and allows visualizing data schema and performance?",
        options: ["Atlas","Compass","Charts","Realms"],
        answer: 2,
        topic: "Visualization"
    },
    {
        id: 190,
        question: "What is a 'Working Set' in MongoDB?",
        options: ["A group of developers","The data and indexes that are frequently accessed and should fit in RAM","A collection of databases","The list of active queries"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 191,
        question: "Which field in ObjectID contains the timestamp?",
        options: ["First 4 bytes","Last 3 bytes","Middle 5 bytes","ObjectID doesn't contain a timestamp"],
        answer: 0,
        topic: "ObjectID"
    },
    {
        id: 192,
        question: "What is a 'Wildcard Index'?",
        options: ["An index on all fields of a collection","An index that matches any database","An index used for regex only","An index on a field and its sub-fields with various paths"],
        answer: 3,
        topic: "Indexes"
    },
    {
        id: 193,
        question: "Which command checks the status of the connection to the server?",
        options: ["db.status()","db.stats()","db.serverStatus()","db.ping()"],
        answer: 2,
        topic: "Monitoring"
    },
    {
        id: 194,
        question: "How can you prevent a field from being updated if it already exists?",
        options: ["Using $setOnInsert","$set","Using $noUpdate","Using $lock"],
        answer: 0,
        topic: "Update Operators"
    },
    {
        id: 195,
        question: "What is the purpose of the $regex operator?",
        options: ["To register a user","To perform pattern matching using regular expressions","To calculate region-wise data","To regenerate an index"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 196,
        question: "Which command shows the current operations running on the database?",
        options: ["db.currentOp()","show operations","db.active()","db.running()"],
        answer: 0,
        topic: "Admin"
    },
    {
        id: 197,
        question: "What is a 'Hidden' replica set member?",
        options: ["A member that doesn't exist","A member that cannot become Primary and is invisible to client applications","A member that only stores logs","A password-protected member"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 198,
        question: "What does 'Data At Rest Encryption' mean?",
        options: ["Encrypting data while it is being sent over network","Encrypting data stored on disk","Encrypting data in the CPU","Deleting data when it is not used"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 199,
        question: "Which command is used to add a new member to a replica set?",
        options: ["rs.add()","rs.insert()","rs.append()","db.addReplica()"],
        answer: 0,
        topic: "Replication"
    },
    {
        id: 200,
        question: "What is the maximum number of voting members in a replica set?",
        options: ["7","12","50","Unlimited"],
        answer: 0,
        topic: "Replication"
    },
    {
        id: 201,
        question: "Which stage is used for text search in Aggregation?",
        options: ["$text","$search","$match with $text","Both B and C"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 202,
        question: "What does the $merge stage do?",
        options: ["Merges two databases","Writes aggregation results to a collection (can update/insert)","Combines two arrays","Joins documents"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 203,
        question: "Which operator returns the first element in an array that matches a condition?",
        options: ["$first","$arrayElementAt","$slice","$filter"],
        answer: 0,
        topic: "Array Operators"
    },
    {
        id: 204,
        question: "What is the function of the $limit stage?",
        options: ["To limit CPU usage","To restrict the number of documents passed to the next stage","To set storage quotas","To limit field length"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 205,
        question: "How do you perform a 'Group and Count' in aggregation?",
        options: ["{ $group: { _id: '$field', count: { $sum: 1 } } }","{ $count: '$field' }","{ $sum: '$field' }","{ $group: '$field' }"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 206,
        question: "The $sample stage is used for:",
        options: ["Saving a sample of data","Randomly selecting a specified number of documents","Testing schema","Creating a demo collection"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 207,
        question: "Which operator checks if all specified values are present in an array field?",
        options: ["$in","$all","$contains","$everything"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 208,
        question: "What does $type operator check?",
        options: ["The BSON type of a field","The speed of the database","The keyboard typing rate","The class inheritance"],
        answer: 0,
        topic: "Query Operators"
    },
    {
        id: 209,
        question: "Which operator allows you to use JavaScript expressions in a query?",
        options: ["$js","$script","$where","$eval"],
        answer: 2,
        topic: "Query Operators"
    },
    {
        id: 210,
        question: "What is a 'Multikey Index'?",
        options: ["An index on multiple fields","An index on a field that contains an array","An index with multiple keys/passwords","A hashed index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 211,
        question: "Which write concern ensures the write has reached the local disk?",
        options: ["{ w: 0 }","{ w: 1 }","{ w: 'maj' }","{ w: 1, j: true }"],
        answer: 1,
        topic: "Durability"
    },
    {
        id: 212,
        question: "What is a 'Journal' in MongoDB storage?",
        options: ["A daily log of events","A write-ahead log used to recover from crashes","A list of todos","A documentation file"],
        answer: 1,
        topic: "Durability"
    },
    {
        id: 213,
        question: "Which command is used to check if a sharded cluster is balanced?",
        options: ["sh.isBalanced()","sh.status()","sh.getBalancerState()","db.checkBalance()"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 214,
        question: "What is 'Zone Sharding'?",
        options: ["Sharding based on geographical zones or specific tiers","Splitting shards into groups","Sharding by time zone","Restricting data to one shard"],
        answer: 0,
        topic: "Sharding"
    },
    {
        id: 215,
        question: "Which method returns only the number of documents matching a query?",
        options: ["find().count()","countDocuments()","estimatedDocumentCount()","All of the above"],
        answer: 3,
        topic: "CRUD"
    },
    {
        id: 216,
        question: "What is the difference between countDocuments() and estimatedDocumentCount()?",
        options: ["None","countDocuments() is more accurate but slower; estimated uses metadata","estimated is more accurate","countDocuments is deprecated"],
        answer: 1,
        topic: "CRUD"
    },
    {
        id: 217,
        question: "Which operator is used for element-wise array updates?",
        options: ["$set","$[]","$elemMatch","$push"],
        answer: 1,
        topic: "Update Operators"
    },
    {
        id: 218,
        question: "What is the purpose of the $elemMatch operator?",
        options: ["To match elements in two different collections","To match documents where at least one array element satisfies all conditions","To match elements with same name","To delete array elements"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 219,
        question: "In aggregation, how do you refer to a field name in an expression?",
        options: ["field","{field}","$field","@field"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 220,
        question: "Which command allows you to see the databases and their sizes?",
        options: ["show dbs","db.stats()","show databases","Both A and C"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 221,
        question: "What is 'Log Rotation'?",
        options: ["Spinning the logs for fun","Archiving current log and starting a new one","Deleting logs","Sending logs to another server"],
        answer: 1,
        topic: "Monitoring"
    },
    {
        id: 222,
        question: "Which tool is used for migrating data from SQL to MongoDB?",
        options: ["SQL2Mongo","MongoDB Relational Migrator","mongoimport","Transporter"],
        answer: 1,
        topic: "Tools"
    },
    {
        id: 223,
        question: "What is a 'Snapshot' in MongoDB Atlas?",
        options: ["A photo of the server","A point-in-time backup of the database","A summary of performance","A copy of one document"],
        answer: 1,
        topic: "Backup"
    },
    {
        id: 224,
        question: "Which security feature ensures that only authorized clients can connect to the database?",
        options: ["Encryption","Authentication","Auditing","Projection"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 225,
        question: "What is 'Auditing' in MongoDB Enterprise?",
        options: ["Checking for bugs","Systematically recording actions performed on the database","Calculating taxes","Counting documents"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 226,
        question: "Which BSON type is used for dates?",
        options: ["String","Number","Date","Timestamp"],
        answer: 2,
        topic: "Data Types"
    },
    {
        id: 227,
        question: "What is the purpose of the $sort stage in aggregation?",
        options: ["To categorize data","To order the documents","To delete documents","To filter data"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 228,
        question: "Which stage is used to create a new field based on conditions?",
        options: ["$match","$addFields","$group","$filter"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 229,
        question: "The $lookup stage performs which type of join?",
        options: ["Inner Join","Left Outer Join","Full Outer Join","Cross Join"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 230,
        question: "What is a 'Collation' in MongoDB?",
        options: ["A set of rules for comparing strings (case-sensitivity, accent-sensitivity)","A type of collection","A data backup","An aggregation stage"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 231,
        question: "Which operator is used to perform AND logic implicitly?",
        options: ["{ a: 1, b: 2 }","$and","Both A and B","{ $and: [ ... ] }"],
        answer: 2,
        topic: "Query Operators"
    },
    {
        id: 232,
        question: "What is a 'Collection Scan'?",
        options: ["A fast way to find data","Reading every document in a collection (inefficient)","Scanning for viruses","A type of index"],
        answer: 1,
        topic: "Performance"
    },
    {
        id: 233,
        question: "Which command returns the version of the MongoDB server?",
        options: ["db.version()","mongo --version","Both A and B","serverInfo()"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 234,
        question: "What is 'Mongoose'?",
        options: ["A MongoDB server","An Object Data Modeling (ODM) library for Node.js","A database monitoring tool","A cloud provider"],
        answer: 1,
        topic: "Drivers"
    },
    {
        id: 235,
        question: "Which command is used to authenticate a user in the shell?",
        options: ["db.auth()","db.login()","auth()","login()"],
        answer: 0,
        topic: "Security"
    },
    {
        id: 236,
        question: "What is the purpose of 'Schema Validation' in MongoDB?",
        options: ["To enforce a structure on documents in a collection","To validate user emails","To check if the database is full","To optimize queries"],
        answer: 0,
        topic: "Data Modeling"
    },
    {
        id: 237,
        question: "Which command adds a schema validation to a collection?",
        options: ["db.createCollection( 'name', { validator: { ... } } )","db.addSchema()","db.validate()","Not possible"],
        answer: 0,
        topic: "Data Modeling"
    },
    {
        id: 238,
        question: "What is 'Connection Pooling'?",
        options: ["Sharing a single connection between all users","Maintaining a cache of open connections to reuse","Deleting old connections","A swimming pool for developers"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 239,
        question: "Which stage is used to create a single field containing all values from a group?",
        options: ["$sum","$avg","$push","$first"],
        answer: 2,
        topic: "Aggregation"
    },
    {
        id: 240,
        question: "What is the function of the $out stage?",
        options: ["To exit the shell","To write the results of the pipeline to a specified collection","To logout","To print data"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 241,
        question: "Which operator is used to select documents where the value of a field is not equal to the specified value?",
        options: ["$not","$ne","$nin","$neq"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 242,
        question: "How do you delete a single document that matches a filter?",
        options: ["db.collection.remove()","db.collection.deleteOne()","db.collection.delete()","db.collection.drop()"],
        answer: 1,
        topic: "CRUD"
    },
    {
        id: 243,
        question: "Which operator is used to rename a field in an update operation?",
        options: ["$set","$rename","$change","$modify"],
        answer: 1,
        topic: "Update Operators"
    },
    {
        id: 244,
        question: "What does the $pull operator do?",
        options: ["Retrieves data","Removes all instances of a value from an array","Adds a value to an array","Deletes a document"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 245,
        question: "What is 'mongod'?",
        options: ["The MongoDB client shell","The primary daemon process for the MongoDB system","A backup tool","A cluster manager"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 246,
        question: "What is 'mongos'?",
        options: ["The MongoDB server","The routing service for sharded clusters","A storage engine","A security plugin"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 247,
        question: "Which field in ObjectID uniquely identifies the machine?",
        options: ["First 4 bytes","Next 5 bytes (including process id)","Last 3 bytes","Middle 3 bytes"],
        answer: 1,
        topic: "ObjectID"
    },
    {
        id: 248,
        question: "Which index type is best for data that has a single value per field but you want to ensure uniqueness?",
        options: ["Hashed Index","Unique Index","Multikey Index","Sparse Index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 249,
        question: "What is an 'Index Prefix'?",
        options: ["A special index for strings","The beginning part of a compound index","A unique ID for an index","The name of the index"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 250,
        question: "What is the purpose of the 'hint()' method?",
        options: ["To give a hint to the developer","To force MongoDB to use a specific index","To guess the query result","To show the schema"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 251,
        question: "Which aggregation stage allows you to filter the documents in the stream?",
        options: ["$filter","$match","$where","$project"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 252,
        question: "What is a 'Tailable Cursor'?",
        options: ["A cursor that can be used once","A cursor that remains open after the client has exhausted the results","A cursor that follows a specific user","A broken cursor"],
        answer: 1,
        topic: "Change Streams"
    },
    {
        id: 253,
        question: "Which operator is used to compare two fields in a query?",
        options: ["$compare","$expr","$eq","$gt"],
        answer: 1,
        topic: "Query Operators"
    },
    {
        id: 254,
        question: "What does the $count stage do in an aggregation pipeline?",
        options: ["Passes a count of documents to the next stage","Counts the number of fields","Counts the databases","Adds 1 to every field"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 255,
        question: "Which command provides info about the distribution of data across shards?",
        options: ["sh.status()","db.printShardingStatus()","Both A and B","sh.info()"],
        answer: 2,
        topic: "Sharding"
    },
    {
        id: 256,
        question: "What is 'Pre-splitting' in sharding?",
        options: ["Breaking shards into pieces before they fail","Creating chunks manually before data is inserted","Splitting the database name","Deleting shards"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 257,
        question: "Which read concern ensures that data has been acknowledged by a majority of the replica set?",
        options: ["local","majority","snapshot","linearizable"],
        answer: 1,
        topic: "Consistency"
    },
    {
        id: 258,
        question: "What is 'Write Conflict' in MongoDB?",
        options: ["When two writers try to update the same document simultaneously in a transaction","When the disk is full","When a user enters wrong password","When the server restarts"],
        answer: 0,
        topic: "Transactions"
    },
    {
        id: 259,
        question: "Which tool is used for real-time monitoring of MongoDB internal metrics?",
        options: ["mongostat","mongotop","MongoDB Ops Manager","All of the above"],
        answer: 3,
        topic: "Monitoring"
    },
    {
        id: 260,
        question: "In the context of MongoDB, what is a 'Document'?",
        options: ["A PDF file","A record in a collection, stored in BSON format","A spreadsheet","A text file"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 261,
        question: "Which operator is used to find documents where an array field contains elements that match all specified values?",
        options: ["$all","$all","$and","$match"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 262,
        question: "What is 'Embedded' data modeling?",
        options: ["Storing related data in separate collections","Storing related data in a single document","Storing data in a different database","Deleting related data"],
        answer: 1,
        topic: "Data Modeling"
    },
    {
        id: 263,
        question: "What is 'Referenced' data modeling?",
        options: ["Storing related data in the same document","Storing references to documents in other collections","Using a lot of indexes","Documenting the code"],
        answer: 1,
        topic: "Data Modeling"
    },
    {
        id: 264,
        question: "Which of the following is true about MongoDB collections?",
        options: ["They require a fixed schema","They are equivalent to tables in RDBS","They must have unique names across the cluster","They cannot be indexed"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 265,
        question: "What is the maximum number of documents allowed in a collection?",
        options: ["1 Billion","No limit (except storage space)","1 Trillion","64 Million"],
        answer: 1,
        topic: "Limits"
    },
    {
        id: 266,
        question: "A TTL index can only be created on fields that contain:",
        options: ["Strings","Numbers","Date objects","Arrays"],
        answer: 2,
        topic: "Indexes"
    },
    {
        id: 267,
        question: "Which operator matches documents where a field is NOT of a specific BSON type?",
        options: ["$notType","$type: { $ne: type }","$not: { $type: type }","Both B and C"],
        answer: 3,
        topic: "Query Operators"
    },
    {
        id: 268,
        question: "What is the use of the $slice operator in projection?",
        options: ["To delete part of an array","To return only a subset of elements in an array","To cut a document in half","To sort an array"],
        answer: 1,
        topic: "Projections"
    },
    {
        id: 269,
        question: "Which phase of sharding moves chunks from one shard to another to ensure even distribution?",
        options: ["Sharding phase","Balancing phase","Indexing phase","Splitting phase"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 270,
        question: "What is a 'Primary Preferred' read preference?",
        options: ["Always read from primary","Read from primary if available, else from secondary","Always read from secondary","Read from nearest"],
        answer: 1,
        topic: "Read Preference"
    },
    {
        id: 271,
        question: "In aggregation, which operator returns the size of an array?",
        options: ["$size","$count","$length","$arrayLen"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 272,
        question: "What is the function of the $replaceRoot stage?",
        options: ["To delete the database","To replace the entire document with a specified sub-document","To change the root password","To restart the server"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 273,
        question: "Which command is used to rename a collection?",
        options: ["db.collection.rename('newName')","db.collection.changeName('newName')","db.runCommand({renameCollection: 'old', to: 'new'})","Both A and C"],
        answer: 3,
        topic: "Admin"
    },
    {
        id: 274,
        question: "What does $bit update operator do?",
        options: ["Updates a bitwise field","Deletes 1 bit","Calculates bitcoin","Speeds up CPU"],
        answer: 0,
        topic: "Update Operators"
    },
    {
        id: 275,
        question: "Which operator is used to find the minimum of two values in an aggregation?",
        options: ["$min","$minVal","$smallest","$getMin"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 276,
        question: "A 'Unique Index' prevents:",
        options: ["Duplicate field names","Duplicate values for the indexed field","Duplicate collections","Duplicate databases"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 277,
        question: "Which tool is useful for visualizing the query execution plan in a GUI?",
        options: ["Shell","Compass","mongostat","mongotop"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 278,
        question: "Which command is used to export data to a CSV file?",
        options: ["mongoexport --type=csv","mongodump --type=csv","mongo-csv","Not possible"],
        answer: 0,
        topic: "Tools"
    },
    {
        id: 279,
        question: "What happens during a 'Replica Set Election'?",
        options: ["A new Secondary is added","A new Primary is chosen by the members","The database is deleted","The admin is changed"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 280,
        question: "Which built-in role provides all privileges of all other roles?",
        options: ["dbAdminAnyDatabase","userAdminAnyDatabase","root","superUser"],
        answer: 2,
        topic: "Security"
    },
    {
        id: 281,
        question: "What is 'Encryption at Rest' used for?",
        options: ["To hide data from the developer","To protect data in case the physical storage is stolen","To speed up reads","To delete data"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 282,
        question: "Which command returns the current user and their roles?",
        options: ["db.whoAmI()","db.runCommand({connectionStatus: 1})","show user","db.currentUser()"],
        answer: 1,
        topic: "Security"
    },
    {
        id: 283,
        question: "What is a 'Shard'?",
        options: ["A piece of glass","A single instance of MongoDB that holds a subset of sharded data","A type of query","A storage engine"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 284,
        question: "What is the 'Balancer' in sharding?",
        options: ["A physical device that balances the server","A background process that manages chunk migration","A user role","A type of index"],
        answer: 1,
        topic: "Sharding"
    },
    {
        id: 285,
        question: "Which stage is used for filtering documents before grouping?",
        options: ["$match","$group","$filter","$project"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 286,
        question: "What does the $stdDevPop accumulator do?",
        options: ["Calculates population standard deviation","Calculates popular documents","Calculates populations of cities","Deletes standard data"],
        answer: 0,
        topic: "Aggregation"
    },
    {
        id: 287,
        question: "A MongoDB collection can be compared to which SQL element?",
        options: ["Table","View","Database","Column"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 288,
        question: "A MongoDB document can be compared to which SQL element?",
        options: ["Row","Column","Table","Schema"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 289,
        question: "Which of the following is NOT a storage engine supported by MongoDB?",
        options: ["WiredTiger","In-Memory","PostgreSQL","EphemeralForTest"],
        answer: 2,
        topic: "Storage Engines"
    },
    {
        id: 290,
        question: "What is the maximum number of shards in a cluster?",
        options: ["10","100","No hard limit (practical limits apply)","1000"],
        answer: 2,
        topic: "Limits"
    },
    {
        id: 291,
        question: "Which command lists all databases?",
        options: ["db.listDatabases()","show dbs","getDatabases","Both A and B"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 292,
        question: "What is the function of the $match stage?",
        options: ["To join documents","To filter documents based on a query","To project fields","To sort documents"],
        answer: 1,
        topic: "Aggregation"
    },
    {
        id: 293,
        question: "Which operator is used to set the value of a field only if an insert occurs during an upsert?",
        options: ["$set","$setOnInsert","$upsertSet","$insert"],
        answer: 1,
        topic: "Update Operators"
    },
    {
        id: 294,
        question: "How do you drop an index?",
        options: ["db.collection.removeIndex('name')","db.collection.dropIndex('name')","db.dropIndex('coll', 'name')","Not possible"],
        answer: 1,
        topic: "Indexes"
    },
    {
        id: 295,
        question: "What is the 'Oplog' size default?",
        options: ["100 MB","5% of free disk space (capped)","1 GB","10 GB"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 296,
        question: "Which command initiates a replica set?",
        options: ["rs.init()","rs.initiate()","rs.start()","rs.reconfig()"],
        answer: 1,
        topic: "Replication"
    },
    {
        id: 297,
        question: "What is 'Write Concern'?",
        options: ["A concern about writing too much","Level of acknowledgment requested from MongoDB for write operations","A log of errors","A security setting"],
        answer: 1,
        topic: "Consistency"
    },
    {
        id: 298,
        question: "Which operator matches documents where a field is an array of a specified size?",
        options: ["$count","$size","$len","$arraySize"],
        answer: 1,
        topic: "Array Operators"
    },
    {
        id: 299,
        question: "What is the use of $addToSet?",
        options: ["Adds a value to an array only if it doesn't exist (ensures uniqueness)","Adds a new collection","Adds a field to a document","Adds a user to a group"],
        answer: 0,
        topic: "Array Operators"
    },
    {
        id: 300,
        question: "What is 'MongoDB Atlas'?",
        options: ["A mapping tool","A fully managed cloud database-as-a-service","A security framework","A GUI for MongoDB"],
        answer: 1,
        topic: "Basics"
    }
];

export default mongodbQuestions;
