import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../model/resource.model'
import { ResourceService } from '../services/resource.service'

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {

    resources: Resource[] | undefined

    constructor(private resourceService: ResourceService, private router: Router) {}

    ngOnInit(): void {
      this.getResources()
    }

    private getResources() {
        this.resourceService.getResourceList().subscribe({
          next: (data) => this.resources = data,
          error: (e) => console.log(e)
      })
    }

    deleteResource(id: number) {
      this.resourceService.deleteResouce(id).subscribe(
        data => {
          console.log(data)
          this.getResources()
        })
    }
}
