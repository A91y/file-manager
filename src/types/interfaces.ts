export interface dataType {
    name: string;
    id: string;
    isFolder: boolean;
    isAdmin: boolean;
    path: [{ name: string, id: string }];
    children: dataType[];
}

interface searchType{
    query: string;
    searchResult: dataType[];
}

export interface globalType{
    fileFolder: dataType;
    currentFolder: string;
    search:searchType
    
}