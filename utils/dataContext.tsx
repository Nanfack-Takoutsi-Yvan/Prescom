import React, {
  createContext,
  FC,
  useMemo,
  ReactElement,
  useContext,
  useState
} from 'react'

interface Data {
  key: string
  id: string
  value: string
}

interface IThemeContext {
  datas?: Data[]
  setValue: (items: Data[]) => void
  findElementByKey: (key: string) => string | null
}

export const datasContext = createContext<IThemeContext>({
  setValue: () => null,
  datas: [],
  findElementByKey: () => ''
})

export const DatasContextProvider: FC<{ children: ReactElement }> = ({
  children
}) => {
  const [datas, setDatas] = useState<Array<Data>>([])
  const setValue = (items: React.SetStateAction<Data[]>) => setDatas(items)
  const findElementByKey = (key: string) => {
    const value = datas.find((item) => item.key === key)
    return value ? value.value : null
  }
  const value = useMemo(
    () => ({ datas, setValue, findElementByKey }),
    [datas, setValue, findElementByKey]
  )

  return <datasContext.Provider value={value}>{children}</datasContext.Provider>
}

export const useThemeContext = () => useContext(datasContext)
