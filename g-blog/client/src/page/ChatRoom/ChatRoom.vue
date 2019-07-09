<template>
  <div style="padding-bottom:0.15rem;">
    <div class="char-box">
      <!-- 此功能正在构建中... ヽ(￣ω￣(￣ω￣〃)ゝ -->
      <nav class="char-nav">
        <span class="char-btn">
          <img />
        </span>
        <span class="char-btn">
          <img />
        </span>
        <span class="char-btn">
          <img />
        </span>
      </nav>
      <div class="chat-msg-box">
        <div class="chat-msg"
          v-html="chatMsg"></div>
        <div class="input-box">
          <textarea class="input"
            v-model="input" 
            @keyup.enter="submit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ChatRoom",
  data() {
    return {
      input: "",
      chatMsg: "",
      username: "",
      socketio: null
    };
  },
  props: {
    collapseData: {
      type: Array,
      required: false
    }
  },
  computed: {
    ...mapGetters("user", {
      user: "_user"
    })
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    customEmit(data) {
      this.chatMsg += `<div class="msg left">
        <span class="name">${data.name}</span>
        <span class="text">${data.text}</span>
      </div>`;
    },
    userLogin(username) {
      // this.username = username;
    }
  },
  created() {
    this.username = this.mock.mock("@cname");
    this.$socket.emit("login", this.username);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  methods: {
    submit() {
      if (this.input) {
        this.chatMsg += `<div class="msg right">
          <span class="name">${this.username}</span>
          <span class="text">${this.input}</span>
        </div>`;
        this.$socket.emit("test", this.input);
        this.input = "";
      }
    }
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.char-box {
  display: flex;
  height: 5.5rem;
  border-radius: 0.1rem;
  box-shadow: 0 0 8px 0 rgba(232,237,250,.8), 0 2px 4px 0 rgba(232,237,250,.7);
  background-color: #A1B1DA;
  overflow: hidden;

  .char-nav {
    display: flex;
    flex-direction: column;
    width: 1rem;
    background: #353341;

    .char-btn {
      margin: 0.1rem;
      height: 0.8rem;
      background-color: #A1B1DA;
    }
  }

  .chat-msg-box {
    flex: 1;
    height: 4rem;
  }

  .chat-msg {
    margin: 20px;
    padding: 20px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #FAFAFA;
  }
}

.input-box {
  display: flex;
  height: 1.5rem;

  .input {
    padding: 0.1rem;
    flex: 1;
    border: none;
    resize: none;
  }

  .input:hover,
  .input:focus {
    border: none;
    outline: none;
  }
}
</style>

<style>
.msg {
  position: relative;
  margin-bottom: 0.15rem;
}

.name {
  display: block;
}

.text {
  display: inline-block;
  max-width: 6rem;
  padding: 0.05rem;
  border-radius: 5px;
  text-align: left;
  word-break: break-word;
}

.left {
  text-align: left;
}

.left .text {
  background: lightgreen;
}

.left .text::after {
  content: "";
  display: table;
  margin-left: -28px;
  margin-top: -18px;
  width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid lightgreen;
  border-bottom: 10px solid transparent;
}

.right {
  text-align: right;
}

.right .text {
  background: lightgray;
}

.right .text::after {
  content: "";
  display: table;
  margin-left: 100%;
  margin-top: -18px;
  width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-left: 15px solid lightgray;
  border-right: 15px solid transparent;
  border-bottom: 10px solid transparent;
}
</style>
