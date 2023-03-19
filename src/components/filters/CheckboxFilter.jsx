import {
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
export const CheckboxFilter = (props) => {
  const { handleSelectBox } = props;
  const { label, hideLabel, spacing = "2", ...rest } = props;
  return (
    <Stack as="fieldset" spacing={spacing}>
      {!hideLabel && (
        <FormLabel fontWeight="semibold" as="legend" mb="0">
          {label}
        </FormLabel>
      )}
      <CheckboxGroup {...rest}>
        {label === "Gender" ? (
          <>
            <Checkbox
              value="Men"
              key="men"
              colorScheme="blue"
              onChange={handleSelectBox}
            >
              <span>Men</span>
            </Checkbox>
            <Checkbox
              value="Women"
              key="women"
              colorScheme="blue"
              onChange={handleSelectBox}
            >
              <span>Women</span>
            </Checkbox>
          </>
        ) : (
          <>
            <Checkbox
              key="hoodie"
              value="Hoodie"
              colorScheme="blue"
              onChange={handleSelectBox}
            >
              <span>Hoodie</span>
            </Checkbox>
            <Checkbox
              key="round"
              value="Round"
              colorScheme="blue"
              onChange={handleSelectBox}
            >
              <span>Round</span>
            </Checkbox>
            <Checkbox
              key="polo"
              value="Polo"
              colorScheme="blue"
              onChange={handleSelectBox}
            >
              <span>Polo</span>
            </Checkbox>
          </>
        )}
      </CheckboxGroup>
    </Stack>
  );
};
