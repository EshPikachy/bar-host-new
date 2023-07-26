const API = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const GET_COCKTAILS_API = API + 'filter.php?c='

export const CATEGORIES_LIST_API = API + 'list.php?c=list'

export const SEARCH_COCKTAILS_API = API + 'search.php?s='

export const GET_DETAILS_API = API + 'lookup.php?i='

export const IMG_URL = 'https://www.thecocktaildb.com/images/ingredients/'

export const GET_INGREDIENT_BY_NAME = API + 'search.php?i='

export const GET_BY_LETTER = API + 'search.php?f='

export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z',]

export const GET_RANDOM = API + 'random.php'