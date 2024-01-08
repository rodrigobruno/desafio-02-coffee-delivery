import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function QuantityInput({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantityInputProps) {
  const isQuantityOne = quantity <= 1

  return (
    <QuantityInputContainer>
      <button
        title="Adicionar um item"
        onClick={decreaseQuantity}
        disabled={isQuantityOne}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button title="Remover um item" onClick={increaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
