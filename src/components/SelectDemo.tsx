import React from "react";
import * as SelectRadix from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";

export function Select() {
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger className="flex items-center justify-between gap-2 w-60">
        <SelectRadix.Value placeholder="Lonjas" />
        <SelectRadix.Icon>
          <CaretDown size={18} />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content>
          <SelectRadix.Viewport className="bg-white p-3 shadow rounded w-fit">
            <SelectRadix.Group className="flex flex-col items-center justify-center gap-3">
              <SelectRadix.Item
                value="Loja 01"
                className="flex items-center justify-center gap-2"
              >
                <SelectRadix.ItemIndicator>
                  <Check size={15} weight="bold" />
                </SelectRadix.ItemIndicator>
                <SelectRadix.ItemText>
                  Genibau, Fortaleza-CE
                </SelectRadix.ItemText>
              </SelectRadix.Item>
              <SelectRadix.Item
                value="Loja 02"
                className="flex items-center justify-center gap-2"
              >
                <SelectRadix.ItemIndicator>
                  <Check size={15} weight="bold" />
                </SelectRadix.ItemIndicator>
                <SelectRadix.ItemText>
                  Genibau, Fortaleza-CE
                </SelectRadix.ItemText>
              </SelectRadix.Item>
              <SelectRadix.Item
                value="Loja 03"
                className="flex items-center justify-center gap-2"
              >
                <SelectRadix.ItemIndicator>
                  <Check size={15} weight="bold" />
                </SelectRadix.ItemIndicator>
                <SelectRadix.ItemText>
                  Genibau, Fortaleza-CE
                </SelectRadix.ItemText>
              </SelectRadix.Item>
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
