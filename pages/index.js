import React, {Component} from 'react';
import { Layout, Card, Page, TextStyle } from "@shopify/polaris";
class Index extends Component {
  render() {
    return(
  <Page>
    <Layout>
      <Layout.AnnotatedSection title="Example Title" description="This is example discription">
        <Card>
          <div>Example</div>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
  </Page>
    );
  };
};

export default Index;