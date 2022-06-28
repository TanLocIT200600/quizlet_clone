import styles from '../styles/Home.module.css';
import { Card, Grid, Text, Button, Row, Col } from "@nextui-org/react";
import Link from "next/link"
export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Interview Information Technology
        </h1>
        <div className={styles.main__grid}>
          <Grid.Container gap={2} justify="flex-start">
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/htmlcss.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Row justify="flex-start" align='center'>
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          HTML, CSS từ zero tới hero
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Link href="/html-css">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button></Link>

                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/javascript.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align='center'>
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình JavaScript cơ bản
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/jsadvanced.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align='center'>
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình Javascript nâng cao
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/reactjs.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align='center'>
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình ReactJS
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/angularjs.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align='center'>
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình AngularJS
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/vuejs.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align="center">
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình VueJS
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card css={{ w: "450px", h: "250px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/nodejs.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                  <Col>
                      <Row justify="flex-start" align="center">
                        <Text color="#000" size={14} weight="bold" transform="uppercase" >
                          Lập trình NodeJS
                        </Text>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                          >
                            Details
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
      </main>
    </div>
  )
}
