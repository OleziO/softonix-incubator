class GeneralService {
  arrayToObject <T extends Record<string, any>> (arr: T[], field: keyof T) {
    return arr.reduce((acc, item) => {
      acc[item[field]] = item

      return acc
    }, {} as Record<string, T>)
  }
}

export const generalService = new GeneralService()
