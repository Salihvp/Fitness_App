export const exerciseOptions = {
        method: 'GET',
        
        headers: {
          'X-RapidAPI-Key': 'd35c9906b7msh42f0516d35ae77dp142ba4jsn9513f7accb08',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd35c9906b7msh42f0516d35ae77dp142ba4jsn9513f7accb08',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async(url,options)=>{
    const res = await fetch(url,options);
    const data = await res.json();
    return data;

}