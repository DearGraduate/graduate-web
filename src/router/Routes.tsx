import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Notfound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        //루트 레이아웃
        //개발 완료 시 element: 이 뒤에 페이지 연결해주세요! 
        path: '/',
        element: <RootLayout />,
        errorElement: <Notfound />,
        children: [
            {
                //홈페이지
                index: true,
                element: <div>홈페이지</div> // 임시로 div 추가

            },
            {
                //로그인페이지
                path: '/login',
                //element:
            },
            {
                //회원가입페이지
                path: '/signup',
                //element:
            },
            {   //메이킹페이지
                path: '/making',
                //element:
            },
            {
                //마이앨범페이지
                //딴소리 : 뷰 추가되는거 봐야 알 것 같은데 my라해도 괜찮을거같아요 
                path: '/myalbum',
                //element:
            },
            {
                //쉐어링페이지
                path: '/sharing',
                //element:
            },
            {
                //다운로딩페이지
                path: '/downloading',
                //element:
            },
            {
                //라이팅페이지
                path: '/writing',
                //element:
            },
            // 아래 주석처리한 양식 참고해서 필요한 페이지 만들 때 추가하면 됩니다. 
            // {
            //     path: '/movies',
            //     children: [
            //         {
            //             path: ':category',
            //             element: <MoviePage />
            //         },
            //     ]
            // },
            
        ]
    },
])

export default router;