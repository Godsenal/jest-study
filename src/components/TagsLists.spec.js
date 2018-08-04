import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe('The tags list', () => {
    it ('renders as expected', () => {
        const tree = renderer
            .create(
                <TagsList tags={['css', 'html', 'swift']}/>
            )
            .toJSON();
        
        console.log(tree);

        expect(tree).toMatchSnapshot();
    });
})
// 처음 이 테스트를 실행시에는 단지 snapshot파일을 만들 뿐.
// 두 번째부터는 그 snapshot과 비교한다.

// jest --update를 하면 snapshot을 업데이트할 수 있다.
// 하지만 이는 꼭, 업데이트가 의도적일 때만 사용해야 한다.
