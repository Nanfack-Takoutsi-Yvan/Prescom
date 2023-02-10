interface AssetInterface {
  key: string
  id: string
  value: {
    value: string
  }
}
export default function formatData(assets: []) {
  return assets.map((asset: AssetInterface) => ({
    id: asset.id,
    key: asset.key,
    value: asset.value.value
  }))
}
