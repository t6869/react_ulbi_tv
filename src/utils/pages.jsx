export const getPageCount = (totolCount, limit) => {
    return Math.ceil(totolCount / limit)
};

export const getPgaesArray = (totalPages) => {
    let result = [];
    for(let i = 0; i < totalPages; i++){
      result.push(i + 1);
    };

    return result;
};