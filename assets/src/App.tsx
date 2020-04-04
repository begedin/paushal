import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'app' })
export default class App extends Vue {
  render() {
    return <div class="app">Hello 2</div>;
  }
}
