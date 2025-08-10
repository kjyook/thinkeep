# KakaoLoginRequest

카카오 로그인 요청 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kakaoId** | **string** | 카카오에서 제공하는 사용자 고유 ID | [default to undefined]
**nickname** | **string** | 카카오 프로필에서 가져온 닉네임 (중복시 자동으로 숫자가 붙습니다) | [default to undefined]
**profileImage** | **string** | 카카오 프로필 이미지 URL (선택사항, 없으면 null 또는 생략 가능) | [optional] [default to undefined]

## Example

```typescript
import { KakaoLoginRequest } from './api';

const instance: KakaoLoginRequest = {
    kakaoId,
    nickname,
    profileImage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
