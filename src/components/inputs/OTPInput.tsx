import React, { useEffect, useRef, useState } from "react";
import { OtpInputContainer, OtpInputN } from "./styles";
import { OtpInputProps } from "./interface";

const OtpInput = ({ length, onChange }: OtpInputProps) => {
  const [inputLength, setInputLength] = useState<any[]>([]);
  const inputRefs = useRef<any>([]);

  const handleInputChange = (text: string, index: any) => {
    const newInputList = [...inputLength];
    newInputList[index] = text;
    setInputLength(newInputList);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (text.length === 1 && index === inputRefs.current.length - 1) {
      const newInputList = [...inputLength];
      newInputList[index] = text;
      onChange(newInputList);
    }

    if (text.length < 1 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (length > 0) {
      const initialInputList = Array(length).fill("");
      setInputLength(initialInputList);
    }
  }, []);

  return (
    <OtpInputContainer>
      {inputLength.map((input: any, i: number) => (
        <OtpInputN
          key={i}
          keyboardType="numeric"
          maxLength={1}
          secureTextEntry={true}
          ref={(ref) => (inputRefs.current[i] = ref)}
          onChangeText={(text) => handleInputChange(text, i)}
        />
      ))}
    </OtpInputContainer>
  );
};

export default OtpInput;
