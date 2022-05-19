import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { TouchableOpacityBase} from 'react-native';
import { theme } from '../../theme';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from './styles';
import { Options } from "../Options";
import { Form } from "../Form";
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Success } from '../../components/Success';

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSend(false)
  }
  function handleFeedbackSend() {
    setFeedbackSend(true)
  }

  return (
    <>
      <TouchableOpacityBase style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacityBase>
      
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}>
          {
            feedbackSend ?
            <Success
            onSendAnotherFeedback={handleRestartFeedback} 
            />
            :
            <>
              {
                feedbackType ?
                <Form
                  feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSend}
                />
                :
                <Options 
                  onFeedbackTypeChanged={setFeedbackType}
                />
              }
            </>
          }
      </BottomSheet>
    </>
  );

}

export default gestureHandlerRootHOC(Widget);