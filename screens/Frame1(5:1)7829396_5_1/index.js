import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_3} />
      <View style={styles.View_11_4} />
      <View style={styles.View_5_4}>
        <Text style={styles.Text_5_4}>Dashboard</Text>
      </View>
      <View style={styles.View_5_6}>
        <Text style={styles.Text_5_6}>Employees</Text>
      </View>
      <View style={styles.View_5_11}>
        <Text style={styles.Text_5_11}>Onboarding</Text>
      </View>
      <View style={styles.View_5_12}>
        <Text style={styles.Text_5_12}>Offboarding</Text>
      </View>
      <View style={styles.View_5_13}>
        <Text style={styles.Text_5_13}>Activities</Text>
      </View>
      <View style={styles.View_5_14}>
        <Text style={styles.Text_5_14}>Settings</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bcd3437-3284-47a7-bb34-5a6a9b612f4a"
        }}
        style={styles.ImageBackground_5_20}
      />
      <View style={styles.View_7_0} />
      <View style={styles.View_7_1} />
      <View style={styles.View_7_2} />
      <View style={styles.View_7_3} />
      <View style={styles.View_7_4} />
      <View style={styles.View_7_5} />
      <View style={styles.View_7_6} />
      <View style={styles.View_7_7} />
      <View style={styles.View_7_14}>
        <Text style={styles.Text_7_14}>Recruitment Progress</Text>
      </View>
      <View style={styles.View_7_16} />
      <View style={styles.View_7_17} />
      <View style={styles.View_7_18} />
      <View style={styles.View_8_2} />
      <View style={styles.View_8_4}>
        <Text style={styles.Text_8_4}>All statuses</Text>
      </View>
      <View style={styles.View_8_5}>
        <Text style={styles.Text_8_5}>Today</Text>
      </View>
      <View style={styles.View_8_6}>
        <Text style={styles.Text_8_6}>Full Name</Text>
      </View>
      <View style={styles.View_8_7}>
        <Text style={styles.Text_8_7}>Email Address</Text>
      </View>
      <View style={styles.View_8_8}>
        <Text style={styles.Text_8_8}>Status</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/104f75c0-346d-4155-9280-e48db53cdaa6"
        }}
        style={styles.ImageBackground_9_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eabcf8e1-cdde-48f9-b71b-04e86709c538"
        }}
        style={styles.ImageBackground_9_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5deed827-e1f5-4b90-a7b9-e4aed5f554b2"
        }}
        style={styles.ImageBackground_9_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32df00c4-0e6c-4148-8496-e9265b8a439f"
        }}
        style={styles.ImageBackground_9_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/710bf25b-fabf-4bfd-8129-29e50d990a38"
        }}
        style={styles.ImageBackground_9_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d11b154-1aba-411d-9a70-99e36250e646"
        }}
        style={styles.ImageBackground_9_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66ef65cc-8532-4c49-a983-48382e8c3f4e"
        }}
        style={styles.ImageBackground_9_7}
      />
      <View style={styles.View_9_12}>
        <Text style={styles.Text_9_12}>John Doe</Text>
      </View>
      <View style={styles.View_9_13}>
        <Text style={styles.Text_9_13}>john.doe@gmail.com</Text>
      </View>
      <View style={styles.View_9_14}>
        <Text style={styles.Text_9_14}>Seleted</Text>
      </View>
      <View style={styles.View_9_18}>
        <Text style={styles.Text_9_18}>Mike Tylor</Text>
      </View>
      <View style={styles.View_9_19}>
        <Text style={styles.Text_9_19}>tylor.mike@gmail.com</Text>
      </View>
      <View style={styles.View_9_20}>
        <Text style={styles.Text_9_20}>Screening</Text>
      </View>
      <View style={styles.View_9_21}>
        <Text style={styles.Text_9_21}>Jane Doe</Text>
      </View>
      <View style={styles.View_9_22}>
        <Text style={styles.Text_9_22}>jane.d@gmil.com</Text>
      </View>
      <View style={styles.View_9_23}>
        <Text style={styles.Text_9_23}>Interview</Text>
      </View>
      <View style={styles.View_9_24}>
        <Text style={styles.Text_9_24}>Michal</Text>
      </View>
      <View style={styles.View_9_25}>
        <Text style={styles.Text_9_25}>michal.s@gmail.com</Text>
      </View>
      <View style={styles.View_9_26}>
        <Text style={styles.Text_9_26}>Tech interview</Text>
      </View>
      <View style={styles.View_9_27}>
        <Text style={styles.Text_9_27}>Samsquanch</Text>
      </View>
      <View style={styles.View_9_28}>
        <Text style={styles.Text_9_28}>sam.s@gmail.com</Text>
      </View>
      <View style={styles.View_9_29}>
        <Text style={styles.Text_9_29}>Interview</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/144690be-4141-47e6-b016-58c8863b9794"
        }}
        style={styles.ImageBackground_9_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc8bcb2a-3539-4fd3-8206-e56dbaa92d06"
        }}
        style={styles.ImageBackground_9_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82abf59b-b58c-46a3-9582-89a3286c76f8"
        }}
        style={styles.ImageBackground_9_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e40ac02-b5c3-4ea9-933b-db0fcd65f611"
        }}
        style={styles.ImageBackground_9_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80aa01ca-bd2a-4509-b0b3-a4ad9dd6064d"
        }}
        style={styles.ImageBackground_9_34}
      />
      <View style={styles.View_9_15}>
        <Text style={styles.Text_9_15}>Slok Vats</Text>
      </View>
      <View style={styles.View_9_16}>
        <Text style={styles.Text_9_16}>vats.slok@gmail.com</Text>
      </View>
      <View style={styles.View_9_17}>
        <Text style={styles.Text_9_17}>Task</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a1aa4c8-22e2-4238-9b3f-3e62532519d8"
        }}
        style={styles.ImageBackground_9_30}
      />
      <View style={styles.View_10_5} />
      <View style={styles.View_11_2}>
        <View style={styles.View_5_5}>
          <Text style={styles.Text_5_5}>Dashboard</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a7fa03e-ae5e-4956-87ab-a4c1a69e399e"
          }}
          style={styles.ImageBackground_9_4}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb59433f-1923-490e-956d-cb52b2bf4f10"
        }}
        style={styles.ImageBackground_11_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eea2147-e326-4df9-a3d7-b313d467e9c7"
        }}
        style={styles.ImageBackground_11_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e5892bf-b5c8-4079-8738-2b4c2376a980"
        }}
        style={styles.ImageBackground_11_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8b584ed-a08a-4dee-85d4-9693d0a76796"
        }}
        style={styles.ImageBackground_11_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a877ecf-9fd2-4485-a25d-5b562eaecc17"
        }}
        style={styles.ImageBackground_11_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2a33b29-287f-4d32-a9c3-7a2e35d5e048"
        }}
        style={styles.ImageBackground_11_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a27bddd-6683-48fd-b6e8-625eaf67d608"
        }}
        style={styles.ImageBackground_11_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/521094be-e3b8-485d-b26b-587010bea303"
        }}
        style={styles.ImageBackground_11_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fab51d04-8c74-42ba-985e-42d058dd1e4f"
        }}
        style={styles.ImageBackground_11_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4733158-d7b3-4a85-94f3-6c7c73635e40"
        }}
        style={styles.ImageBackground_11_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd84c35f-8745-45ac-a6f6-0d9792cf9f67"
        }}
        style={styles.ImageBackground_11_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5238be19-0667-4a59-b889-e8489cd3f70a"
        }}
        style={styles.ImageBackground_11_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97bfa3b1-ada8-4491-bacb-550dc6f5ca79"
        }}
        style={styles.ImageBackground_11_14}
      />
      <View style={styles.View_11_21}>
        <Text style={styles.Text_11_21}>John Doe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4559163d-9e70-405a-a74d-8c3e4d724aef"
        }}
        style={styles.ImageBackground_11_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f65990da-acdd-4f49-a425-bb450ef92cb1"
        }}
        style={styles.ImageBackground_11_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6b657e1-d144-410f-a647-d2e56da4307a"
        }}
        style={styles.ImageBackground_11_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db2c3d86-92fd-4bdf-9b53-17c7ce6029f7"
        }}
        style={styles.ImageBackground_11_25}
      />
      <View style={styles.View_11_26} />
      <View style={styles.View_11_27} />
      <View style={styles.View_11_28}>
        <Text style={styles.Text_11_28}>743</Text>
      </View>
      <View style={styles.View_11_29}>
        <Text style={styles.Text_11_29}>21</Text>
      </View>
      <View style={styles.View_11_31}>
        <Text style={styles.Text_11_31}>Employees</Text>
      </View>
      <View style={styles.View_11_32}>
        <Text style={styles.Text_11_32}>Time-off</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26986f8f-b102-45a1-a097-2c683fdc68c9"
        }}
        style={styles.ImageBackground_12_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0dcbd20-b9d0-4e42-9ec8-77ffa5e2030c"
        }}
        style={styles.ImageBackground_12_3}
      />
      <View style={styles.View_14_1} />
      <View style={styles.View_14_2} />
      <View style={styles.View_14_3} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26621bc3-48e6-4b9b-aa8e-b32b389b90d0"
        }}
        style={styles.ImageBackground_14_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4acb47b6-96ac-44a3-be76-7349c81d904f"
        }}
        style={styles.ImageBackground_14_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2183b49c-3a94-4db3-bd0c-5866760fb4fa"
        }}
        style={styles.ImageBackground_14_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73d3b4be-1cff-4477-b46a-a38c68a888b3"
        }}
        style={styles.ImageBackground_17_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5c051bb-0e2d-4b9c-90a7-a04f30aef81e"
        }}
        style={styles.ImageBackground_14_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12c336ff-718a-4743-8249-0f02c20b48da"
        }}
        style={styles.ImageBackground_14_12}
      />
      <View style={styles.View_16_2}>
        <View style={styles.View_14_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0cc0d5f-a2fe-4d92-916d-9e86e9d2128a"
            }}
            style={styles.ImageBackground_14_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da4bb9a2-8c6b-409f-a6bf-c3eaa6bd7f5f"
            }}
            style={styles.ImageBackground_17_0}
          />
          <View style={styles.View_17_2}>
            <Text style={styles.Text_17_2}>25.5%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_14_13}>
        <Text style={styles.Text_14_13}>Accepted</Text>
      </View>
      <View style={styles.View_14_15}>
        <Text style={styles.Text_14_15}>job applications</Text>
      </View>
      <View style={styles.View_14_16}>
        <Text style={styles.Text_14_16}>87/340</Text>
      </View>
      <View style={styles.View_15_2}>
        <Text style={styles.Text_15_2}>Rejected</Text>
      </View>
      <View style={styles.View_15_3}>
        <Text style={styles.Text_15_3}>job applications</Text>
      </View>
      <View style={styles.View_15_5}>
        <Text style={styles.Text_15_5}>174/340</Text>
      </View>
      <View style={styles.View_17_3}>
        <Text style={styles.Text_17_3}>51.1%</Text>
      </View>
      <View style={styles.View_19_2} />
      <View style={styles.View_19_3} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4271e7d-55e4-477b-85fe-05b53f92170d"
        }}
        style={styles.ImageBackground_19_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f4b8adf-5514-4779-af12-91f29a80fc58"
        }}
        style={styles.ImageBackground_19_5}
      />
      <View style={styles.View_19_6}>
        <Text style={styles.Text_19_6}>December 2020</Text>
      </View>
      <View style={styles.View_19_7}>
        <Text style={styles.Text_19_7}>S</Text>
      </View>
      <View style={styles.View_20_2}>
        <Text style={styles.Text_20_2}>M</Text>
      </View>
      <View style={styles.View_20_3}>
        <Text style={styles.Text_20_3}>T</Text>
      </View>
      <View style={styles.View_20_4}>
        <Text style={styles.Text_20_4}>W</Text>
      </View>
      <View style={styles.View_20_5}>
        <Text style={styles.Text_20_5}>T</Text>
      </View>
      <View style={styles.View_20_6}>
        <Text style={styles.Text_20_6}>F</Text>
      </View>
      <View style={styles.View_20_7}>
        <Text style={styles.Text_20_7}>S</Text>
      </View>
      <View style={styles.View_20_8}>
        <Text style={styles.Text_20_8}>29</Text>
      </View>
      <View style={styles.View_20_9}>
        <Text style={styles.Text_20_9}>30</Text>
      </View>
      <View style={styles.View_20_10}>
        <Text style={styles.Text_20_10}>1</Text>
      </View>
      <View style={styles.View_20_11}>
        <Text style={styles.Text_20_11}>2</Text>
      </View>
      <View style={styles.View_20_12}>
        <Text style={styles.Text_20_12}>3</Text>
      </View>
      <View style={styles.View_20_13}>
        <Text style={styles.Text_20_13}>4</Text>
      </View>
      <View style={styles.View_20_14}>
        <Text style={styles.Text_20_14}>5</Text>
      </View>
      <View style={styles.View_20_16}>
        <Text style={styles.Text_20_16}>6</Text>
      </View>
      <View style={styles.View_20_24}>
        <Text style={styles.Text_20_24}>13</Text>
      </View>
      <View style={styles.View_20_31}>
        <Text style={styles.Text_20_31}>20</Text>
      </View>
      <View style={styles.View_20_17}>
        <Text style={styles.Text_20_17}>7</Text>
      </View>
      <View style={styles.View_20_25}>
        <Text style={styles.Text_20_25}>14</Text>
      </View>
      <View style={styles.View_20_32}>
        <Text style={styles.Text_20_32}>21</Text>
      </View>
      <View style={styles.View_20_18}>
        <Text style={styles.Text_20_18}>8</Text>
      </View>
      <View style={styles.View_20_26}>
        <Text style={styles.Text_20_26}>15</Text>
      </View>
      <View style={styles.View_20_33}>
        <Text style={styles.Text_20_33}>22</Text>
      </View>
      <View style={styles.View_20_19}>
        <Text style={styles.Text_20_19}>9</Text>
      </View>
      <View style={styles.View_20_27}>
        <Text style={styles.Text_20_27}>16</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4cb6509-889e-4b32-a06c-9a757e879afa"
        }}
        style={styles.ImageBackground_21_9}
      />
      <View style={styles.View_20_34}>
        <Text style={styles.Text_20_34}>23</Text>
      </View>
      <View style={styles.View_20_20}>
        <Text style={styles.Text_20_20}>10</Text>
      </View>
      <View style={styles.View_20_28}>
        <Text style={styles.Text_20_28}>17</Text>
      </View>
      <View style={styles.View_20_35}>
        <Text style={styles.Text_20_35}>24</Text>
      </View>
      <View style={styles.View_20_21}>
        <Text style={styles.Text_20_21}>11</Text>
      </View>
      <View style={styles.View_20_29}>
        <Text style={styles.Text_20_29}>18</Text>
      </View>
      <View style={styles.View_20_36}>
        <Text style={styles.Text_20_36}>25</Text>
      </View>
      <View style={styles.View_20_23}>
        <Text style={styles.Text_20_23}>12</Text>
      </View>
      <View style={styles.View_20_30}>
        <Text style={styles.Text_20_30}>19</Text>
      </View>
      <View style={styles.View_20_37}>
        <Text style={styles.Text_20_37}>26</Text>
      </View>
      <View style={styles.View_21_2}>
        <Text style={styles.Text_21_2}>27</Text>
      </View>
      <View style={styles.View_21_3}>
        <Text style={styles.Text_21_3}>28</Text>
      </View>
      <View style={styles.View_21_4}>
        <Text style={styles.Text_21_4}>29</Text>
      </View>
      <View style={styles.View_21_5}>
        <Text style={styles.Text_21_5}>30</Text>
      </View>
      <View style={styles.View_21_6}>
        <Text style={styles.Text_21_6}>31</Text>
      </View>
      <View style={styles.View_21_7}>
        <Text style={styles.Text_21_7}>1</Text>
      </View>
      <View style={styles.View_21_8}>
        <Text style={styles.Text_21_8}>2</Text>
      </View>
      <View style={styles.View_21_10} />
      <View style={styles.View_21_11}>
        <Text style={styles.Text_21_11}>Evaluation progress</Text>
      </View>
      <View style={styles.View_21_12}>
        <Text style={styles.Text_21_12}>See more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64b8cadc-d785-4ec6-97b3-4c4785206c7a"
        }}
        style={styles.ImageBackground_21_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75ee3e42-5c08-4f10-8b8e-a81384b06327"
        }}
        style={styles.ImageBackground_21_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b46f66a4-a428-4c68-9e2d-623c5678981b"
        }}
        style={styles.ImageBackground_21_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08259702-1a60-4670-b999-7c9f939a9a2a"
        }}
        style={styles.ImageBackground_21_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15ed5b73-38f5-4b60-a5b8-b0a4705b9642"
        }}
        style={styles.ImageBackground_21_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34eaa4a5-232e-4374-84e8-3af4bea4300d"
        }}
        style={styles.ImageBackground_21_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b2677b1-82ec-4cd4-b829-1476c695b5d9"
        }}
        style={styles.ImageBackground_21_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7acd8481-09b2-49fc-9a4a-ff9e0bf9d2e6"
        }}
        style={styles.ImageBackground_21_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38f61262-0888-4613-8b30-845b4a4760f5"
        }}
        style={styles.ImageBackground_21_23}
      />
      <View style={styles.View_21_24}>
        <Text style={styles.Text_21_24}>12</Text>
      </View>
      <View style={styles.View_21_25}>
        <Text style={styles.Text_21_25}>14</Text>
      </View>
      <View style={styles.View_21_26}>
        <Text style={styles.Text_21_26}>4</Text>
      </View>
      <View style={styles.View_21_27}>
        <Text style={styles.Text_21_27}>15</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c12eb71c-798e-45c8-babf-32cbd2cd5876"
        }}
        style={styles.ImageBackground_21_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8265d1f5-a7da-4197-9c40-51422ab4f965"
        }}
        style={styles.ImageBackground_21_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d34a1190-c496-4d35-b76b-447e00f01132"
        }}
        style={styles.ImageBackground_21_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17a264a5-4ba3-483b-ba60-12b8bd5315b0"
        }}
        style={styles.ImageBackground_21_32}
      />
      <View style={styles.View_21_33}>
        <Text style={styles.Text_21_33}>Design</Text>
      </View>
      <View style={styles.View_21_34}>
        <Text style={styles.Text_21_34}>iOS</Text>
      </View>
      <View style={styles.View_21_35}>
        <Text style={styles.Text_21_35}>HR</Text>
      </View>
      <View style={styles.View_21_36}>
        <Text style={styles.Text_21_36}>DevOps</Text>
      </View>
      <View style={styles.View_21_39} />
      <View style={styles.View_21_40}>
        <Text style={styles.Text_21_40}>Hello John Doe!</Text>
      </View>
      <View style={styles.View_21_41}>
        <Text style={styles.Text_21_41}>
          Welcome back! You have 16 notifications.
        </Text>
      </View>
      <View style={styles.View_21_42} />
      <View style={styles.View_21_44}>
        <Text style={styles.Text_21_44}>Learn more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e7f054e-778e-4a17-ae67-465c0ba11e0d"
        }}
        style={styles.ImageBackground_25_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d0aa138-b010-4412-b3de-031d2f0debd0"
        }}
        style={styles.ImageBackground_24_1}
      />
      <View style={styles.View_30_2} />
      <View style={styles.View_30_4}>
        <Text style={styles.Text_30_4}>3</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(243, 243, 243, 0.6000000238418579)" },
  View_2: { height: hp("100%") },
  View_5_3: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 25, 48, 1)"
  },
  View_11_4: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(51, 21, 79, 1)"
  },
  View_5_4: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_6: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_5_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_11: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_5_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_12: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_5_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_13: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_5_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_14: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_5_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_20: {
    width: wp("50%"),
    height: hp("57%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_7_0: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_1: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("50%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_2: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("55%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_3: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_4: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("70%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_5: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("78%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_6: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("85%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_7: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("93%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_14: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_7_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_7_16: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_17: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_18: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_4: {
    width: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_8_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_5: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_8_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_6: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_7: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_8: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_8: {
    width: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("43%")
  },
  ImageBackground_9_10: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("43%")
  },
  ImageBackground_9_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("49%")
  },
  ImageBackground_9_5: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%")
  },
  ImageBackground_9_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%")
  },
  ImageBackground_9_11: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("27%")
  },
  ImageBackground_9_7: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("35%")
  },
  View_9_12: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_13: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_14: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_18: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_9_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_19: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_9_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_20: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_9_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_21: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_22: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_23: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_24: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_25: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_26: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_27: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_9_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_28: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("95%"),
    justifyContent: "center"
  },
  Text_9_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_29: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("95%"),
    justifyContent: "center"
  },
  Text_9_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_9: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("57%")
  },
  ImageBackground_9_31: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("72%")
  },
  ImageBackground_9_32: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("79%")
  },
  ImageBackground_9_33: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("87%")
  },
  ImageBackground_9_34: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("94%")
  },
  View_9_15: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_16: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_17: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_30: {
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("64%")
  },
  View_10_5: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%"),
    backgroundColor: "rgba(73, 42, 135, 1)"
  },
  View_11_2: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_5: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_4: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_11_6: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("58%")
  },
  ImageBackground_11_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("65%")
  },
  ImageBackground_11_8: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("73%")
  },
  ImageBackground_11_9: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("80%")
  },
  ImageBackground_11_10: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("88%")
  },
  ImageBackground_11_11: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("96%")
  },
  ImageBackground_11_15: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_11_16: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("64%")
  },
  ImageBackground_11_17: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("71%")
  },
  ImageBackground_11_18: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("79%")
  },
  ImageBackground_11_19: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("86%")
  },
  ImageBackground_11_20: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("94%")
  },
  ImageBackground_11_14: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("1%")
  },
  View_11_21: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_11_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_11_22: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("2%")
  },
  ImageBackground_11_23: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_11_24: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%")
  },
  ImageBackground_11_25: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%")
  },
  View_11_26: {
    width: wp("12%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_11_27: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_11_28: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_11_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_11_29: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_11_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_11_31: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_11_31: {
    color: "rgba(130, 72, 185, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_11_32: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_11_32: {
    color: "rgba(130, 72, 185, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_12_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("45%")
  },
  ImageBackground_12_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("45%")
  },
  View_14_1: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_14_2: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("9%"),
    backgroundColor: "rgba(108, 69, 146, 1)"
  },
  View_14_3: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("27%"),
    backgroundColor: "rgba(229, 96, 96, 1)"
  },
  ImageBackground_14_9: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("35%")
  },
  ImageBackground_14_10: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("9%")
  },
  ImageBackground_14_5: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("28%")
  },
  ImageBackground_17_1: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("28%")
  },
  ImageBackground_14_11: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("29%")
  },
  ImageBackground_14_12: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("19%")
  },
  View_16_2: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_7: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_14_4: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_17_0: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_2: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_17_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_14_13: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_14_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_14_15: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_14_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_14_16: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_2: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_15_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_3: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_15_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_5: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_15_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_17_3: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_17_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_19_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_19_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_19_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("65%")
  },
  ImageBackground_19_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("65%")
  },
  View_19_6: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_19_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_19_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_3: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_5: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_6: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_8: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_9: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_10: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_11: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_12: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_13: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_14: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_16: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_24: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_31: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_17: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_32: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_18: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_26: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_33: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_19: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_27: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_9: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("90%")
  },
  View_20_34: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_20: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_28: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_35: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_21: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_29: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_36: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_23: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_30: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_37: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_3: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_6: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_8: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_10: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_21_11: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_21_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_12: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_21_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_13: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("12%")
  },
  ImageBackground_21_16: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("17%")
  },
  ImageBackground_21_17: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("17%")
  },
  ImageBackground_21_18: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("22%")
  },
  ImageBackground_21_19: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("31%")
  },
  ImageBackground_21_20: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%")
  },
  ImageBackground_21_21: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("22%")
  },
  ImageBackground_21_22: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("31%")
  },
  ImageBackground_21_23: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%")
  },
  View_21_24: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_21_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_21_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_26: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_21_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_27: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_21_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_29: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("36%")
  },
  ImageBackground_21_30: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("36%")
  },
  ImageBackground_21_31: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("36%")
  },
  ImageBackground_21_32: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("36%")
  },
  View_21_33: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_34: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_21_35: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_36: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_39: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_21_40: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_21_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_41: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_21_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_42: {
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("35%"),
    backgroundColor: "rgba(130, 72, 185, 1)"
  },
  View_21_44: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_25_0: {
    width: wp("5%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_24_1: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_30_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("43%"),
    backgroundColor: "rgba(253, 12, 12, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5
  },
  View_30_4: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_30_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
