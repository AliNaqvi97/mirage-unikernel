import React from 'react';
import './App.css';
import { Typography, Paper, AppBar, Toolbar, Button, Grid, Link } from '@material-ui/core';

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} sm={9}>
              <Typography variant="h6" color="inherit">
                CS378 - Unikernels
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <Button 
                  color="inherit" 
                  href='https://github.com/AliNaqvi97/mirage-unikernel' target='_blank' rel='noopener noreferrer'
                  >
                  Github
                </Button>
                <Button 
                  color="inherit" 
                  href='https://mirage.io' target='_blank' rel='noopener noreferrer'
                  >                  MirageOS
                </Button>
                <Button 
                  color="inherit" 
                  href='https://mirage.io/wiki/mirage-www' target='_blank' rel='noopener noreferrer'
                  >                  External Guide
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper className="App">
        <Typography variant="h2" className="header text">
          Building static websites in a unikernel using MirageOS
        </Typography>

        <div style={{width: "100%", paddingBottom: "56.25%", position: "relative", marginTop: "2%", marginBottom: "2%"}}>
        <img
          className="img-content"
          src="https://media.datacenterdynamics.com/media/images/Container_unikernel.width-880.png"
          alt="Image"
        />
        </div>
        <Typography variant="h6" className="text">
          Container based development has been the forefront of software 
          engineering as of late. More and more companies are adopting 
          container based services for deployment such as Docker, Kubernetes, 
          OpenStack, GKE, and the like. These all  offer a great deal of things 
          however, is there a better option for us to explore? With keeping 
          all the current requirements in mind and improving others,&nbsp;
          <Link href="http://unikernel.org/" target='_blank' rel='noopener noreferrer'>Unikernels</Link> 
          &nbsp;seem to fill in the gap.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h4" className="text">
          <strong>
            What are Unikernels and what do they offer?
          </strong>        
        </Typography>

        <br/>
        <Typography variant="h6" className="text">
        Unikernels are single address space machine images. They are similar to 
        containers in that they are application sized, but are different in 
        that they use a unique kernel OS, which makes them like VMs. Because 
        of this, they lessen the resources used on a cloud system, while also 
        providing faster boot times and improved security.
        </Typography>
        <br/>
        <Typography variant="h6" className="text">
          <strong>
            Improved security
          </strong>
        </Typography>
        <Typography variant="h6" className="text">
          Unikernels reduce the amount of code deployed, which reduces 
          the attack surface, improving security.
        </Typography>
        <br/>
        <Typography variant="h6" className="text">
          <strong>
            Small footprints
          </strong>
        </Typography>
        <Typography variant="h6" className="text">
          Unikernel images are often orders of magnitude smaller than 
          traditional OS deployments.
        </Typography>
        <br/>
        <Typography variant="h6" className="text">
          <strong>
            Highly optimised
          </strong>
        </Typography>
        <Typography variant="h6" className="text">
          The unikernel compilation model enables whole-system optimisation 
          across device drivers and application logic.
        </Typography>
        <br/>
        <Typography variant="h6" className="text">
          <strong>
            Fast Boot
          </strong>
        </Typography>
        <Typography variant="h6" className="text">
          Unikernels can boot extremely quickly, with boot times measured 
          in milliseconds.
        </Typography>

        <br/>
        <br/>
        <Typography variant="h4" className="text">
          <strong>
            Building your own unikernel for your site
          </strong>        
        </Typography>
        <br/>
        <Typography variant="h6" className="text">
          This guide will go over how to build your own unikernel that contains 
          a static website ready to be deployed. We'll be using&nbsp;
          <Link href="http://mirage.io/" target='_blank' rel='noopener noreferrer'>MirageOS</Link> 
          &nbsp;for our unikernel service. It is also recommended to do this in 
          a Linux environment to avoid any compatibility issues. We use Ubuntu 
          18.04 but we also got it working on Ubuntu 16.04. OSX is untested on 
          our end  (but has support), while Windows doesn't have support for 
          MirageOS.

          <br/>
          <br/>
          In order to get started, you'll need the following software installed:
          <ul>
            <li>
              <Link href="https://opam.ocaml.org/doc/Install.html" target='_blank' rel='noopener noreferrer'>OPAM</Link> 
              &nbsp;version 2.0.0+ 
            </li>
            <li>
              <Link href="http://ocaml.org/docs/install.html" target='_blank' rel='noopener noreferrer'>OCaml</Link> 
              &nbsp;version 4.05.0+
            </li>
            <li>
              <Link href="https://mirage.io/wiki/install" target='_blank' rel='noopener noreferrer'>Mirage</Link> 
            </li>
          </ul>

          Don't worry, if you don't have any of this installed, we'll walk you 
          through it as it can be tedious to get all the installations right.
          <br/>
          If you don't want to deal with dependency hell with OPAM (as we did 
          and arguably the most time consuming part of the process), you can 
          download our&nbsp;
          <Link href="https://gist.github.com/AliNaqvi97/08ff760dffe71f894db0acfc06b1cb60" target='_blank' rel='noopener noreferrer'>OPAM Switch export</Link> 
          &nbsp;(highly recommended) which defines all the necessary 
          dependencies necessary to make Mirage work, give or take a few 
          dependencies.
        </Typography>
        <br/>
        <br/>
        <ol className="text">
          <Typography variant="h6">
            <strong>
              <li>
                Getting started
              </li>
            </strong>
            If you don't have any of the above installed, start here, otherwise, 
            feel free to skip this step to actually making the unikernel with 
            your site.
            <br/>
            To get OPAM, consult their install page (linked above) to see how 
            you can install OPAM on your OS. If you're on Ubuntu 18.04, run the 
            following commands to get OPAM version 2.0:
            <br/>
            <pre>
            $ sudo add-apt-repository ppa:avsm/ppa
            <br/>
            $ sudo apt update
            <br/>
            $ sudo apt install opam
            <br/>
            $ opam init
            </pre>
            This will install and init OPAM version 2.0.4 (at the time of this guide) 
            which will work for MirageOS. Next, get the OPAM Switch export we 
            provided earlier and navigate to where the file is on your computer. 
            Then run the following commands to set up the OPAM environment:
            <br/>
            <pre>
            $ opam switch import 4-05.export --switch Mirage-dependencies
            <br/>
            $ opam switch Mirage-dependencies
            <br/>
            $ eval  $(opam env)
            </pre>

            The installation of all the packages will take a while, so sit back 
            and watch ~440 packages get installed on your device, or go do 
            something more entertaining in the meantime :)
            <br/>
            <br/>
            <strong>
              <li>
                Setting up the unikernel
              </li>
            </strong>

            At this point, you should be ready to set up the unikernel to work 
            for your site. Start by cloning Mirage's skeleton repo to get 
            necessary starter files and see if MirageOS works:
            <br/>
            <pre>
            $ git clone https://github.com/mirage/mirage-skeleton
            <br/>
            $ cd mirage-skeleton/tutorial/hello
            <br/>
            $ mirage configure -t unix
            <br/>
            $ make depend && make
            <br/>
            $ ./hello
            </pre>
            MirageOS should now be configured to create a UNIX executable of a 
            "hello" program. It will generate a Makefile which can be used to 
            install all missing dependencies (however it can sometimes not work 
            correctly and create dependency issues) and then actually construct 
            the unikernel using "make". This will package the "hello" application 
            into the unikernel constructed and when you run the generated executable, 
            it will run the process defined for the unikernel, in this case, the hello
            application. If it ran properly, you should see something like this:
            <pre>
            2019-05-08 08:58:40 +00:00: INF [application] hello
            <br/>
            2019-05-08 08:58:41 +00:00: INF [application] hello
            <br/>
            2019-05-08 08:58:42 +00:00: INF [application] hello
            <br/>
            2019-05-08 08:58:43 +00:00: INF [application] hello
            </pre>
            If you see that, congratulations! You've just got a unikernel working 
            with a single process application. 

            <br/>
            <br/>
            <strong>
              <li>
                Building the unikernel for your site
              </li>
            </strong>
            Next, we want to actually put your site into a unikernel so it can be 
            served up through that. Start off by creating a directory that houses 
            your website content. For example, if you just have a single <code>index.html</code> 
            &nbsp;file, then your path (assuming you create the folder in the home directory) 
            will look something like <code>~/website/content/index.html</code>. 
            For our website, we made a React app and had content folder be the deployment-ready 
            app so our path looked like <code>~/website/build/</code>&nbsp;where build/ was 
            the build directory from the result of building the React app, which had the index.html 
            and other CSS/JS files within it.
            <br/>
            <br/>
            Copy over the config.ml and dispatch.ml files from <code>mirage-skeleton/applications/static_website_tls/</code>
            &nbsp;folder to your website's folder (~/website). You now need to modify config.ml so that the directory it 
            grabs your site content from is not "htdocs", but instead what you had moved into the folder (content, build, etc). 
            Do this by modifying the "let data = ..." line so that your 
            directory should be the object in quotes instead of "htdocs". Lastly, 
            you need to copy the whole TLS folder from <code>mirage-skeleton/applications/static_website_tls/</code> 
            to the directory you're inside for your website (~/website).

            <br/>
            <br/>
            Finally, you should be all set to configure and build the unikernel for your website. 
            Run the following commands for it to be built:
            <pre>
            $ mirage configure -t unix --net=socket --http=8080 --https=4433
            <br/>
            $ make depend
            <br/>
            $ make
            <br/>
            $ ./https
            </pre>
            If everything worked correctly, you should get some output similar to the following:
            <br/>
            <pre>
            2019-05-08 09:42:41 +00:00: INF [tcpip-stack-socket] Manager: connect
            <br/>
            2019-05-08 09:42:41 +00:00: INF [tcpip-stack-socket] Manager: configuring
            <br/>
            2019-05-08 09:42:41 +00:00: INF [https] listening on 4433/TCP
            <br/>
            2019-05-08 09:42:41 +00:00: INF [http] listening on 8080/TCP
            </pre>
            Congratulations! You're site is now being served through the unikernel and 
            can be accessed on localhost at port 8080  (HTTP) and 4433  (HTTPS)! You will want to connect 
            first through HTTP and subsequent requests will route HTTP requests to HTTPS. When you first access it, 
            it will say you have bad certificate but you can still proceed as it's only because you 
            used the provided TLS certificate. In the future, you will have to provide your own 
            legitimate certificate so that your website is secure.
          </Typography>
          </ol>

        <br/>
        <br/>
        <Typography variant="h4" className="text">
          <strong>
            Conclusion
          </strong>        
        </Typography>

        <Typography variant="h6" className="text">
          Now that you have your website as an executable on a unikernel, what's next?
          You could spin up an EC2 instance and have the executable running in the background 
          to have a simple way of your website being hosted at the instance's public endpoint.
          <br/>
          <br/>
          Unikernel tech is still relatively new and so is the documentation and support for it. 
          AWS EC2 has included support for custom AMIs to be used to spin up instances, one of them 
          being Unikernels however the process to upload a unikernel as an AMI and be used for 
          the instance was process that didn't work for us due to limitations in support for 
          putting Unikerns on EC2. We tried using the&nbsp;
          <Link href="https://hackage.haskell.org/package/ec2-unikernel" target='_blank' rel='noopener noreferrer'>ec2-unikernel</Link>
          &nbsp;library, which would package up the unikernel and spin up an instance that used the unikernel as it's image, 
          however we were unable to get this working. We ran into instance reachability issues on the EC2 
          end and couldn't access the website. There's still more research to be done about this tech but it 
          does show promise as the unikernel itself is relatively small and very portable.
        </Typography>

        <br/>
        <br/>
        <Typography variant="h4" className="text">
          <strong>
            References
          </strong>        
        </Typography>

        <Typography variant="h6" className="text">
          This guide was based on and used elements from&nbsp;
          <Link href="https://www.davidudelson.com/blog/2017/06/13/aws-unikernel-guide/" target='_blank' rel='noopener noreferrer'>David Udelson's guide</Link>
          &nbsp;to hosting
          static sites as Unikernels on AWS.
          <br/><br/><br/><br/>
        </Typography>
      </Paper>
    </div>
  );
}

export default App;
